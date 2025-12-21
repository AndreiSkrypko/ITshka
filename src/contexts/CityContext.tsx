import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CityCode, cities, countryToCity } from '@/config/cities';
import { detectNearestCity } from '@/utils/nearestCity';

interface CityContextType {
  currentCity: CityCode;
  setCity: (city: CityCode) => void;
  cityConfig: typeof cities[CityCode];
  isInCity: boolean; // находится ли пользователь физически в городе
  userCountry: string | null; // код страны пользователя
}

const CityContext = createContext<CityContextType | undefined>(undefined);

export const useCity = () => {
  const context = useContext(CityContext);
  if (!context) {
    throw new Error('useCity must be used within CityProvider');
  }
  return context;
};

interface CityProviderProps {
  children: ReactNode;
}

export const CityProvider = ({ children }: CityProviderProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentCity, setCurrentCityState] = useState<CityCode>('minsk');
  const [isInitialized, setIsInitialized] = useState(false);
  const [isManualSwitch, setIsManualSwitch] = useState(false);
  const [isInCity, setIsInCity] = useState(false);
  const [userCountry, setUserCountry] = useState<string | null>(null);

  // Определяем город из URL
  const getCityFromPath = (): CityCode | null => {
    const path = location.pathname;
    if (path === '/' || path === '') return null;
    
    // Извлекаем первый сегмент пути (город)
    const pathSegments = path.split('/').filter(Boolean);
    if (pathSegments.length === 0) return null;
    
    const citySegment = pathSegments[0].toLowerCase();
    
    // Проверяем точные совпадения
    if (citySegment === 'minsk') return 'minsk';
    if (citySegment === 'lida') return 'lida';
    if (citySegment === 'warsaw') return 'warsaw';
    if (citySegment === 'brest') return 'brest';
    if (citySegment === 'vitebsk') return 'vitebsk';
    if (citySegment === 'gomel') return 'gomel';
    if (citySegment === 'grodno') return 'grodno';
    if (citySegment === 'mogilev') return 'mogilev';
    if (citySegment === 'baranovichi') return 'baranovichi';
    if (citySegment === 'bobruisk') return 'bobruisk';
    if (citySegment === 'pinsk') return 'pinsk';
    if (citySegment === 'orsha') return 'orsha';
    if (citySegment === 'maladzyechna') return 'maladzyechna';
    if (citySegment === 'salihorsk') return 'salihorsk';
    if (citySegment === 'navapolatsk') return 'navapolatsk';
    if (citySegment === 'polatsk') return 'polatsk';
    if (citySegment === 'mazyr') return 'mazyr';
    if (citySegment === 'slutsk') return 'slutsk';
    
    // Если город не найден, возвращаем null (будет определен ближайший)
    return null;
  };

  // Определение города по координатам (геолокация)
  const detectCityByCoordinates = async (lat: number, lon: number): Promise<{ city: CityCode; isInCity: boolean }> => {
    // Координаты городов (точные)
    const cityCoordinates = {
      lida: { lat: 53.8833, lon: 25.2997 },
      minsk: { lat: 53.9045, lon: 27.5615 },
      warsaw: { lat: 52.2297, lon: 21.0122 },
      brest: { lat: 52.0975, lon: 23.7341 },
      vitebsk: { lat: 55.1904, lon: 30.2049 },
      gomel: { lat: 52.4345, lon: 30.9754 },
      grodno: { lat: 53.6884, lon: 23.8258 },
      mogilev: { lat: 53.8945, lon: 30.3307 }
    };

    // Вычисляем расстояние до каждого города (используем формулу гаверсинуса для большей точности)
    let minDistance = Infinity;
    let closestCity: CityCode = 'minsk';

    for (const [city, coords] of Object.entries(cityCoordinates)) {
      // Упрощенная формула расстояния (достаточно точная для наших целей)
      const dLat = (lat - coords.lat) * Math.PI / 180;
      const dLon = (lon - coords.lon) * Math.PI / 180;
      const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(coords.lat * Math.PI / 180) * Math.cos(lat * Math.PI / 180) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = 6371 * c; // Радиус Земли в км
      
      if (distance < minDistance) {
        minDistance = distance;
        closestCity = city as CityCode;
      }
    }

    // Считаем, что пользователь в городе, если расстояние меньше 30 км
    const isInCity = minDistance < 30;
    
    return { city: closestCity, isInCity };
  };

  // Автоопределение города по IP (только если нет в URL и localStorage)
  const detectCityByIP = async () => {
    try {
      // Сначала пытаемся использовать геолокацию браузера (более точно)
      if (navigator.geolocation) {
        return new Promise<{ city: CityCode; isInCity: boolean }>((resolve) => {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              const result = await detectCityByCoordinates(
                position.coords.latitude,
                position.coords.longitude
              );
              resolve(result);
            },
            async () => {
              // Если геолокация недоступна, используем IP
              // Используем кэш для уменьшения запросов
              const cacheKey = 'ipapi_cache';
              const cached = sessionStorage.getItem(cacheKey);
              if (cached) {
                try {
                  const cachedData = JSON.parse(cached);
                  const now = Date.now();
                  // Кэш действителен 1 час
                  if (now - cachedData.timestamp < 3600000) {
                    const data = cachedData.data;
                    // Сохраняем код страны
                    if (data.country_code) {
                      setUserCountry(data.country_code);
                    }
                    // Продолжаем обработку с кэшированными данными
                    if (data.city) {
                      const cityName = data.city.toLowerCase();
                      if (cityName.includes('lida') || cityName.includes('лида')) {
                        resolve({ city: 'lida', isInCity: true });
                        return;
                      }
                      if (cityName.includes('minsk') || cityName.includes('минск') || cityName.includes('mińsk')) {
                        resolve({ city: 'minsk', isInCity: true });
                        return;
                      }
                      if (cityName.includes('warsaw') || cityName.includes('варшава') || cityName.includes('warszawa')) {
                        resolve({ city: 'warsaw', isInCity: true });
                        return;
                      }
                      if (cityName.includes('brest') || cityName.includes('брест') || cityName.includes('brześć')) {
                        resolve({ city: 'brest', isInCity: true });
                        return;
                      }
                      if (cityName.includes('vitebsk') || cityName.includes('витебск') || cityName.includes('witebsk')) {
                        resolve({ city: 'vitebsk', isInCity: true });
                        return;
                      }
                      if (cityName.includes('gomel') || cityName.includes('гомель') || cityName.includes('homel')) {
                        resolve({ city: 'gomel', isInCity: true });
                        return;
                      }
                      if (cityName.includes('grodno') || cityName.includes('гродно')) {
                        resolve({ city: 'grodno', isInCity: true });
                        return;
                      }
                      if (cityName.includes('mogilev') || cityName.includes('могилев') || cityName.includes('могилёв') || cityName.includes('mohylew')) {
                        resolve({ city: 'mogilev', isInCity: true });
                        return;
                      }
                      if (cityName.includes('baranovichi') || cityName.includes('барановичи') || cityName.includes('baranavichy')) {
                        resolve({ city: 'baranovichi', isInCity: true });
                        return;
                      }
                      if (cityName.includes('bobruisk') || cityName.includes('бобруйск') || cityName.includes('babruysk')) {
                        resolve({ city: 'bobruisk', isInCity: true });
                        return;
                      }
                      if (cityName.includes('pinsk') || cityName.includes('пинск')) {
                        resolve({ city: 'pinsk', isInCity: true });
                        return;
                      }
                      if (cityName.includes('orsha') || cityName.includes('орша')) {
                        resolve({ city: 'orsha', isInCity: true });
                        return;
                      }
                      if (cityName.includes('maladzyechna') || cityName.includes('молодечно')) {
                        resolve({ city: 'maladzyechna', isInCity: true });
                        return;
                      }
                      if (cityName.includes('salihorsk') || cityName.includes('солигорск') || cityName.includes('soligorsk')) {
                        resolve({ city: 'salihorsk', isInCity: true });
                        return;
                      }
                      if (cityName.includes('navapolatsk') || cityName.includes('новополоцк')) {
                        resolve({ city: 'navapolatsk', isInCity: true });
                        return;
                      }
                      if (cityName.includes('polatsk') || cityName.includes('полоцк') || cityName.includes('polotsk')) {
                        resolve({ city: 'polatsk', isInCity: true });
                        return;
                      }
                      if (cityName.includes('mazyr') || cityName.includes('мозырь')) {
                        resolve({ city: 'mazyr', isInCity: true });
                        return;
                      }
                      if (cityName.includes('slutsk') || cityName.includes('слуцк')) {
                        resolve({ city: 'slutsk', isInCity: true });
                        return;
                      }
                    }
                    const detectedCity = countryToCity[data.country_code] || 'minsk';
                    resolve({ city: detectedCity, isInCity: false });
                    return;
                  }
                } catch (e) {
                  // Игнорируем ошибки кэша
                }
              }
              
              const response = await fetch('https://ipapi.co/json/', {
                signal: AbortSignal.timeout(2000),
                cache: 'default'
              });
              const data = await response.json();
              
              // Сохраняем в кэш
              try {
                sessionStorage.setItem(cacheKey, JSON.stringify({
                  data,
                  timestamp: Date.now()
                }));
              } catch (e) {
                // Игнорируем ошибки сохранения кэша
              }
              
              // Пытаемся определить город по названию города из API
              if (data.city) {
                const cityName = data.city.toLowerCase();
                // Проверяем точные совпадения
                if (cityName.includes('lida') || cityName.includes('лида')) {
                  resolve({ city: 'lida', isInCity: true });
                  return;
                }
                if (cityName.includes('minsk') || cityName.includes('минск') || cityName.includes('mińsk')) {
                  resolve({ city: 'minsk', isInCity: true });
                  return;
                }
                if (cityName.includes('warsaw') || cityName.includes('варшава') || cityName.includes('warszawa')) {
                  resolve({ city: 'warsaw', isInCity: true });
                  return;
                }
                if (cityName.includes('brest') || cityName.includes('брест') || cityName.includes('brześć')) {
                  resolve({ city: 'brest', isInCity: true });
                  return;
                }
                if (cityName.includes('vitebsk') || cityName.includes('витебск') || cityName.includes('witebsk')) {
                  resolve({ city: 'vitebsk', isInCity: true });
                  return;
                }
                if (cityName.includes('gomel') || cityName.includes('гомель') || cityName.includes('homel')) {
                  resolve({ city: 'gomel', isInCity: true });
                  return;
                }
                if (cityName.includes('grodno') || cityName.includes('гродно')) {
                  resolve({ city: 'grodno', isInCity: true });
                  return;
                }
                if (cityName.includes('mogilev') || cityName.includes('могилев') || cityName.includes('могилёв') || cityName.includes('mohylew')) {
                  resolve({ city: 'mogilev', isInCity: true });
                  return;
                }
              }
              
              // Сохраняем код страны пользователя
              if (data.country_code) {
                setUserCountry(data.country_code);
              }
              
              // Если город не определен, используем маппинг по стране
              const detectedCity = countryToCity[data.country_code] || 'minsk';
              resolve({ city: detectedCity, isInCity: false });
            },
            { timeout: 2000, enableHighAccuracy: false }
          );
        });
      }

      // Если геолокация не поддерживается, используем IP
      const response = await fetch('https://ipapi.co/json/', {
        signal: AbortSignal.timeout(2000)
      });
      const data = await response.json();
      
      // Пытаемся определить город по названию города из API
      if (data.city) {
        const cityName = data.city.toLowerCase();
        // Проверяем точные совпадения
        if (cityName.includes('lida') || cityName.includes('лида')) {
          return { city: 'lida', isInCity: true };
        }
        if (cityName.includes('minsk') || cityName.includes('минск') || cityName.includes('mińsk')) {
          return { city: 'minsk', isInCity: true };
        }
        if (cityName.includes('warsaw') || cityName.includes('варшава') || cityName.includes('warszawa')) {
          return { city: 'warsaw', isInCity: true };
        }
        if (cityName.includes('brest') || cityName.includes('брест') || cityName.includes('brześć')) {
          return { city: 'brest', isInCity: true };
        }
        if (cityName.includes('vitebsk') || cityName.includes('витебск') || cityName.includes('witebsk')) {
          return { city: 'vitebsk', isInCity: true };
        }
        if (cityName.includes('gomel') || cityName.includes('гомель') || cityName.includes('homel')) {
          return { city: 'gomel', isInCity: true };
        }
        if (cityName.includes('grodno') || cityName.includes('гродно')) {
          return { city: 'grodno', isInCity: true };
        }
        if (cityName.includes('mogilev') || cityName.includes('могилев') || cityName.includes('могилёв') || cityName.includes('mohylew')) {
          return { city: 'mogilev', isInCity: true };
        }
        if (cityName.includes('baranovichi') || cityName.includes('барановичи') || cityName.includes('baranavichy')) {
          return { city: 'baranovichi', isInCity: true };
        }
        if (cityName.includes('bobruisk') || cityName.includes('бобруйск') || cityName.includes('babruysk')) {
          return { city: 'bobruisk', isInCity: true };
        }
        if (cityName.includes('pinsk') || cityName.includes('пинск')) {
          return { city: 'pinsk', isInCity: true };
        }
        if (cityName.includes('orsha') || cityName.includes('орша')) {
          return { city: 'orsha', isInCity: true };
        }
        if (cityName.includes('maladzyechna') || cityName.includes('молодечно')) {
          return { city: 'maladzyechna', isInCity: true };
        }
        if (cityName.includes('salihorsk') || cityName.includes('солигорск') || cityName.includes('soligorsk')) {
          return { city: 'salihorsk', isInCity: true };
        }
        if (cityName.includes('navapolatsk') || cityName.includes('новополоцк')) {
          return { city: 'navapolatsk', isInCity: true };
        }
        if (cityName.includes('polatsk') || cityName.includes('полоцк') || cityName.includes('polotsk')) {
          return { city: 'polatsk', isInCity: true };
        }
        if (cityName.includes('mazyr') || cityName.includes('мозырь')) {
          return { city: 'mazyr', isInCity: true };
        }
        if (cityName.includes('slutsk') || cityName.includes('слуцк')) {
          return { city: 'slutsk', isInCity: true };
        }
      }
      
      // Сохраняем код страны пользователя
      if (data.country_code) {
        setUserCountry(data.country_code);
      }
      
      // Если город не определен, используем маппинг по стране
      const detectedCity = countryToCity[data.country_code] || 'minsk';
      return { city: detectedCity, isInCity: false };
    } catch {
      return { city: 'minsk', isInCity: false };
    }
  };

  // Инициализация города
  useEffect(() => {
    const initializeCity = async () => {
      // Если было ручное переключение, не переопределяем город автоматически
      if (isManualSwitch) {
        setIsInitialized(true);
        return;
      }

      // 1. Проверяем URL (высший приоритет)
      const cityFromPath = getCityFromPath();
      if (cityFromPath) {
        // Город найден в URL и он валидный
        setCurrentCityState(cityFromPath);
        localStorage.setItem('selectedCity', cityFromPath);
        setIsInitialized(true);
        return;
      }

      // 2. Если в URL указан несуществующий город, определяем ближайший
      const path = location.pathname;
      if (path !== '/' && path !== '') {
        const pathSegments = path.split('/').filter(Boolean);
        if (pathSegments.length > 0) {
          // В URL есть город, но он не найден в списке - определяем ближайший
          try {
            const nearestCity = await detectNearestCity();
            setCurrentCityState(nearestCity);
            localStorage.setItem('selectedCity', nearestCity);
            // Обновляем URL на ближайший город (но сохраняем остальную часть пути если есть)
            navigate(`/${nearestCity}`, { replace: true });
            setIsInitialized(true);
            return;
          } catch (error) {
            // Если не удалось определить, используем дефолт
            setCurrentCityState('minsk');
            localStorage.setItem('selectedCity', 'minsk');
            navigate('/minsk', { replace: true });
            setIsInitialized(true);
            return;
          }
        }
      }

      // 3. Пытаемся определить город по геолокации/IP (только при первой загрузке)
      try {
        const detected = await detectCityByIP();
        
        // Проверяем, есть ли сохраненный город в localStorage
        const savedCity = localStorage.getItem('selectedCity') as CityCode | null;
        
        // Если есть сохраненный город, используем его (не переопределяем автоматически)
        if (savedCity && cities[savedCity]) {
          setCurrentCityState(savedCity);
          // Проверяем, находится ли пользователь в сохраненном городе
          if (savedCity === detected.city) {
            setIsInCity(detected.isInCity);
          } else {
            setIsInCity(false);
          }
          navigate(`/${savedCity}`, { replace: true });
          setIsInitialized(true);
          return;
        }
        
        // Если нет сохраненного, используем определенный
        setCurrentCityState(detected.city);
        setIsInCity(detected.isInCity);
        localStorage.setItem('selectedCity', detected.city);
        navigate(`/${detected.city}`, { replace: true });
        setIsInitialized(true);
      } catch (error) {
        // Если автоопределение не сработало, используем localStorage или дефолт
        const savedCity = localStorage.getItem('selectedCity') as CityCode | null;
        if (savedCity && cities[savedCity]) {
          setCurrentCityState(savedCity);
          navigate(`/${savedCity}`, { replace: true });
          setIsInitialized(true);
        } else {
          // Последний резерв - Минск
          setCurrentCityState('minsk');
          localStorage.setItem('selectedCity', 'minsk');
          navigate('/minsk', { replace: true });
          setIsInitialized(true);
        }
      }
    };

    if (!isInitialized) {
      initializeCity();
    }
  }, [location.pathname, navigate, isInitialized, isManualSwitch]);

  // Синхронизация с URL при изменении пути (только если не было ручного переключения)
  useEffect(() => {
    if (isManualSwitch) {
      setIsManualSwitch(false);
      return;
    }
    
    const cityFromPath = getCityFromPath();
    
    // Если найден валидный город в URL
    if (cityFromPath && cityFromPath !== currentCity && cities[cityFromPath]) {
      setCurrentCityState(cityFromPath);
      localStorage.setItem('selectedCity', cityFromPath);
      // Проверяем, находится ли пользователь в городе из URL
      detectCityByIP().then((detected) => {
        if (detected.city === cityFromPath) {
          setIsInCity(detected.isInCity);
        } else {
          setIsInCity(false);
        }
      }).catch(() => {
        setIsInCity(false);
      });
      return;
    }
    
    // Если в URL указан несуществующий город, определяем ближайший
    const path = location.pathname;
    if (path !== '/' && path !== '' && !cityFromPath) {
      const pathSegments = path.split('/').filter(Boolean);
      if (pathSegments.length > 0) {
        // В URL есть город, но он не найден в списке - определяем ближайший
        detectNearestCity().then((nearestCity) => {
          if (nearestCity !== currentCity) {
            setCurrentCityState(nearestCity);
            localStorage.setItem('selectedCity', nearestCity);
            navigate(`/${nearestCity}`, { replace: true });
          }
        }).catch(() => {
          // Если не удалось определить, используем текущий город или дефолт
          if (!cities[currentCity]) {
            setCurrentCityState('minsk');
            localStorage.setItem('selectedCity', 'minsk');
            navigate('/minsk', { replace: true });
          }
        });
      }
    }
  }, [location.pathname, currentCity, isManualSwitch, navigate]);

  const setCity = (city: CityCode) => {
    // Проверяем валидность города
    if (!cities[city]) {
      console.error(`Invalid city code: ${city}`);
      return;
    }
    
    setIsManualSwitch(true);
    setCurrentCityState(city);
    localStorage.setItem('selectedCity', city);
    navigate(`/${city}`, { replace: true });
  };

  const value: CityContextType = {
    currentCity,
    setCity,
    cityConfig: cities[currentCity],
    isInCity,
    userCountry
  };

  return <CityContext.Provider value={value}>{children}</CityContext.Provider>;
};

