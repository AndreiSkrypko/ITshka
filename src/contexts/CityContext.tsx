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
    if (citySegment === 'moscow') return 'moscow';
    if (citySegment === 'spb') return 'spb';
    if (citySegment === 'novosibirsk') return 'novosibirsk';
    if (citySegment === 'ekaterinburg') return 'ekaterinburg';
    if (citySegment === 'kazan') return 'kazan';
    if (citySegment === 'nizhny-novgorod') return 'nizhny-novgorod';
    if (citySegment === 'chelyabinsk') return 'chelyabinsk';
    if (citySegment === 'samara') return 'samara';
    if (citySegment === 'omsk') return 'omsk';
    if (citySegment === 'rostov-on-don') return 'rostov-on-don';
    if (citySegment === 'ufa') return 'ufa';
    if (citySegment === 'krasnoyarsk') return 'krasnoyarsk';
    if (citySegment === 'voronezh') return 'voronezh';
    if (citySegment === 'perm') return 'perm';
    if (citySegment === 'volgograd') return 'volgograd';
    if (citySegment === 'almaty') return 'almaty';
    if (citySegment === 'nur-sultan') return 'nur-sultan';
    if (citySegment === 'shymkent') return 'shymkent';
    if (citySegment === 'karaganda') return 'karaganda';
    if (citySegment === 'aktobe') return 'aktobe';
    if (citySegment === 'taraz') return 'taraz';
    if (citySegment === 'pavlodar') return 'pavlodar';
    if (citySegment === 'oskemen') return 'oskemen';
    if (citySegment === 'semey') return 'semey';
    if (citySegment === 'atyrau') return 'atyrau';
    
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
      mogilev: { lat: 53.8945, lon: 30.3307 },
      baranovichi: { lat: 53.1333, lon: 26.0167 },
      bobruisk: { lat: 53.1500, lon: 29.2333 },
      pinsk: { lat: 52.1167, lon: 26.1000 },
      orsha: { lat: 54.5000, lon: 30.4167 },
      maladzyechna: { lat: 54.3167, lon: 26.8500 },
      salihorsk: { lat: 52.7833, lon: 27.5500 },
      navapolatsk: { lat: 55.5333, lon: 28.6667 },
      polatsk: { lat: 55.4833, lon: 28.7833 },
      mazyr: { lat: 52.0500, lon: 29.2500 },
      slutsk: { lat: 53.0167, lon: 27.5500 },
      moscow: { lat: 55.7558, lon: 37.6173 },
      spb: { lat: 59.9343, lon: 30.3351 },
      novosibirsk: { lat: 55.0084, lon: 82.9357 },
      ekaterinburg: { lat: 56.8380, lon: 60.6056 },
      kazan: { lat: 55.7961, lon: 49.1089 },
      'nizhny-novgorod': { lat: 56.3287, lon: 44.0020 },
      chelyabinsk: { lat: 55.1540, lon: 61.4291 },
      samara: { lat: 53.1959, lon: 50.1002 },
      omsk: { lat: 54.9924, lon: 73.3686 },
      'rostov-on-don': { lat: 47.2357, lon: 39.7015 },
      ufa: { lat: 54.7352, lon: 55.9587 },
      krasnoyarsk: { lat: 56.0184, lon: 92.8672 },
      voronezh: { lat: 51.6608, lon: 39.2003 },
      perm: { lat: 58.0105, lon: 56.2502 },
      volgograd: { lat: 48.7071, lon: 44.5170 },
      almaty: { lat: 43.2220, lon: 76.8512 },
      'nur-sultan': { lat: 51.1694, lon: 71.4491 },
      shymkent: { lat: 42.3419, lon: 69.5901 },
      karaganda: { lat: 49.8014, lon: 73.1024 },
      aktobe: { lat: 50.2833, lon: 57.1667 },
      taraz: { lat: 42.9000, lon: 71.3667 },
      pavlodar: { lat: 52.2833, lon: 76.9667 },
      oskemen: { lat: 49.9561, lon: 82.6144 },
      semey: { lat: 50.4111, lon: 80.2275 },
      atyrau: { lat: 47.1167, lon: 51.8833 }
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
    
    // ВАЖНО: Если ближайший город найден по координатам, используем его (независимо от страны из IP)
    // Это решает проблему, когда IP определяет страну как PL, но пользователь физически в Лиде
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
                    
                    // ПРИОРИТЕТ 1: Используем координаты из IP API для определения ближайшего города (самый точный способ)
                    // ВАЖНО: Координаты имеют абсолютный приоритет - если они указывают на белорусский город,
                    // используем его, даже если IP определяет страну как PL
                    if (data.latitude && data.longitude) {
                      const result = await detectCityByCoordinates(data.latitude, data.longitude);
                      // Если ближайший город найден по координатам, используем его (независимо от страны из IP)
                      resolve(result);
                      return;
                    }
                    
                    // ПРИОРИТЕТ 2: Пытаемся определить по названию города из API
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
                      if (cityName.includes('moscow') || cityName.includes('москва')) {
                        resolve({ city: 'moscow', isInCity: true });
                        return;
                      }
                      if (cityName.includes('saint-petersburg') || cityName.includes('saint petersburg') || cityName.includes('санкт-петербург') || cityName.includes('санкт петербург') || cityName.includes('спб') || cityName.includes('st petersburg')) {
                        resolve({ city: 'spb', isInCity: true });
                        return;
                      }
                      if (cityName.includes('novosibirsk') || cityName.includes('новосибирск')) {
                        resolve({ city: 'novosibirsk', isInCity: true });
                        return;
                      }
                      if (cityName.includes('ekaterinburg') || cityName.includes('yekaterinburg') || cityName.includes('екатеринбург')) {
                        resolve({ city: 'ekaterinburg', isInCity: true });
                        return;
                      }
                      if (cityName.includes('kazan') || cityName.includes('казань')) {
                        resolve({ city: 'kazan', isInCity: true });
                        return;
                      }
                      if (cityName.includes('nizhny-novgorod') || cityName.includes('nizhny novgorod') || cityName.includes('нижний новгород') || cityName.includes('нижний-новгород')) {
                        resolve({ city: 'nizhny-novgorod', isInCity: true });
                        return;
                      }
                      if (cityName.includes('chelyabinsk') || cityName.includes('челябинск')) {
                        resolve({ city: 'chelyabinsk', isInCity: true });
                        return;
                      }
                      if (cityName.includes('samara') || cityName.includes('самара')) {
                        resolve({ city: 'samara', isInCity: true });
                        return;
                      }
                      if (cityName.includes('omsk') || cityName.includes('омск')) {
                        resolve({ city: 'omsk', isInCity: true });
                        return;
                      }
                      if (cityName.includes('rostov-on-don') || cityName.includes('rostov on don') || cityName.includes('ростов-на-дону') || cityName.includes('ростов на дону') || cityName.includes('ростов')) {
                        resolve({ city: 'rostov-on-don', isInCity: true });
                        return;
                      }
                      if (cityName.includes('ufa') || cityName.includes('уфа')) {
                        resolve({ city: 'ufa', isInCity: true });
                        return;
                      }
                      if (cityName.includes('krasnoyarsk') || cityName.includes('красноярск')) {
                        resolve({ city: 'krasnoyarsk', isInCity: true });
                        return;
                      }
                      if (cityName.includes('voronezh') || cityName.includes('воронеж')) {
                        resolve({ city: 'voronezh', isInCity: true });
                        return;
                      }
                      if (cityName.includes('perm') || cityName.includes('пермь')) {
                        resolve({ city: 'perm', isInCity: true });
                        return;
                      }
                      if (cityName.includes('volgograd') || cityName.includes('волгоград')) {
                        resolve({ city: 'volgograd', isInCity: true });
                        return;
                      }
                    }
                    
                    // ПРИОРИТЕТ 3: Если город не определен, используем маппинг по стране (последний резерв)
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
              
              // Сохраняем код страны пользователя
              if (data.country_code) {
                setUserCountry(data.country_code);
              }
              
              // ПРИОРИТЕТ 1: Используем координаты из IP API для определения ближайшего города (самый точный способ)
              if (data.latitude && data.longitude) {
                const result = await detectCityByCoordinates(data.latitude, data.longitude);
                resolve(result);
                return;
              }
              
              // ПРИОРИТЕТ 2: Пытаемся определить город по названию города из API
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
              
              // ПРИОРИТЕТ 1: Используем координаты из IP API для определения ближайшего города (самый точный способ)
              if (data.latitude && data.longitude) {
                const result = await detectCityByCoordinates(data.latitude, data.longitude);
                resolve(result);
                return;
              }
              
              // ПРИОРИТЕТ 2: Пытаемся определить город по названию города из API
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
              }
              
              // ПРИОРИТЕТ 3: Если город не определен, используем маппинг по стране (последний резерв)
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
      
      // Сохраняем код страны пользователя
      if (data.country_code) {
        setUserCountry(data.country_code);
      }
      
      // ПРИОРИТЕТ 1: Используем координаты из IP API для определения ближайшего города (самый точный способ)
      if (data.latitude && data.longitude) {
        return await detectCityByCoordinates(data.latitude, data.longitude);
      }
      
      // ПРИОРИТЕТ 2: Пытаемся определить город по названию города из API
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
        if (cityName.includes('moscow') || cityName.includes('москва')) {
          return { city: 'moscow', isInCity: true };
        }
        if (cityName.includes('saint-petersburg') || cityName.includes('saint petersburg') || cityName.includes('санкт-петербург') || cityName.includes('санкт петербург') || cityName.includes('спб') || cityName.includes('st petersburg')) {
          return { city: 'spb', isInCity: true };
        }
        if (cityName.includes('novosibirsk') || cityName.includes('новосибирск')) {
          return { city: 'novosibirsk', isInCity: true };
        }
        if (cityName.includes('ekaterinburg') || cityName.includes('yekaterinburg') || cityName.includes('екатеринбург')) {
          return { city: 'ekaterinburg', isInCity: true };
        }
        if (cityName.includes('kazan') || cityName.includes('казань')) {
          return { city: 'kazan', isInCity: true };
        }
        if (cityName.includes('nizhny-novgorod') || cityName.includes('nizhny novgorod') || cityName.includes('нижний новгород') || cityName.includes('нижний-новгород')) {
          return { city: 'nizhny-novgorod', isInCity: true };
        }
        if (cityName.includes('chelyabinsk') || cityName.includes('челябинск')) {
          return { city: 'chelyabinsk', isInCity: true };
        }
        if (cityName.includes('samara') || cityName.includes('самара')) {
          return { city: 'samara', isInCity: true };
        }
        if (cityName.includes('omsk') || cityName.includes('омск')) {
          return { city: 'omsk', isInCity: true };
        }
        if (cityName.includes('rostov-on-don') || cityName.includes('rostov on don') || cityName.includes('ростов-на-дону') || cityName.includes('ростов на дону') || cityName.includes('ростов')) {
          return { city: 'rostov-on-don', isInCity: true };
        }
        if (cityName.includes('ufa') || cityName.includes('уфа')) {
          return { city: 'ufa', isInCity: true };
        }
        if (cityName.includes('krasnoyarsk') || cityName.includes('красноярск')) {
          return { city: 'krasnoyarsk', isInCity: true };
        }
        if (cityName.includes('voronezh') || cityName.includes('воронеж')) {
          return { city: 'voronezh', isInCity: true };
        }
        if (cityName.includes('perm') || cityName.includes('пермь')) {
          return { city: 'perm', isInCity: true };
        }
                if (cityName.includes('volgograd') || cityName.includes('волгоград')) {
                  return { city: 'volgograd', isInCity: true };
                }
              }
              
              // Сохраняем код страны пользователя
              if (data.country_code) {
                setUserCountry(data.country_code);
              }
              
              // ПРИОРИТЕТ 3: Если город не определен, используем маппинг по стране (последний резерв)
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

      // Проверяем, есть ли сохраненный город в localStorage
      const savedCity = localStorage.getItem('selectedCity') as CityCode | null;
      
      // Сначала определяем реальное местоположение пользователя
      try {
        const detected = await detectCityByIP();
        
        // 1. Если есть сохраненный город, проверяем, совпадает ли он с реальным местоположением
        if (savedCity && cities[savedCity]) {
          // Если пользователь физически находится в другом городе, переопределяем
          // Это важно: если пользователь в Лиде, но в localStorage Варшава, используем Лиду
          if (detected.city !== savedCity && detected.isInCity) {
            // Пользователь физически в другом городе - используем реальное местоположение
            setCurrentCityState(detected.city);
            setIsInCity(detected.isInCity);
            localStorage.setItem('selectedCity', detected.city);
            navigate(`/${detected.city}`, { replace: true });
            setIsInitialized(true);
            return;
          }
          // Если сохраненный город совпадает с реальным или пользователь не в городе, используем сохраненный
          setCurrentCityState(savedCity);
          setIsInCity(detected.city === savedCity ? detected.isInCity : false);
          navigate(`/${savedCity}`, { replace: true });
          setIsInitialized(true);
          return;
        }
        
        // 2. Если нет сохраненного города, используем определенный по геолокации/IP
        setCurrentCityState(detected.city);
        setIsInCity(detected.isInCity);
        localStorage.setItem('selectedCity', detected.city);
        navigate(`/${detected.city}`, { replace: true });
        setIsInitialized(true);
        return;
      } catch (error) {
        // Если автоопределение не сработало, проверяем URL как резерв
        const cityFromPath = getCityFromPath();
        if (cityFromPath && cities[cityFromPath]) {
          setCurrentCityState(cityFromPath);
          localStorage.setItem('selectedCity', cityFromPath);
          navigate(`/${cityFromPath}`, { replace: true });
          setIsInitialized(true);
          return;
        }
        
        // Последний резерв - Минск
        setCurrentCityState('minsk');
        localStorage.setItem('selectedCity', 'minsk');
        navigate('/minsk', { replace: true });
        setIsInitialized(true);
        return;
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

