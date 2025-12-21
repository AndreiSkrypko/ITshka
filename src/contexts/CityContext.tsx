import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CityCode, cities, countryToCity } from '@/config/cities';

interface CityContextType {
  currentCity: CityCode;
  setCity: (city: CityCode) => void;
  cityConfig: typeof cities[CityCode];
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

  // Определяем город из URL
  const getCityFromPath = (): CityCode | null => {
    const path = location.pathname;
    if (path.startsWith('/minsk')) return 'minsk';
    if (path.startsWith('/lida')) return 'lida';
    if (path.startsWith('/warsaw')) return 'warsaw';
    return null;
  };

  // Определение города по координатам (геолокация)
  const detectCityByCoordinates = async (lat: number, lon: number): Promise<CityCode> => {
    // Координаты городов (примерные)
    const cityCoordinates = {
      lida: { lat: 53.8833, lon: 25.2997 },
      minsk: { lat: 53.9045, lon: 27.5615 },
      warsaw: { lat: 52.2297, lon: 21.0122 }
    };

    // Вычисляем расстояние до каждого города и выбираем ближайший
    let minDistance = Infinity;
    let closestCity: CityCode = 'minsk';

    for (const [city, coords] of Object.entries(cityCoordinates)) {
      const distance = Math.sqrt(
        Math.pow(lat - coords.lat, 2) + Math.pow(lon - coords.lon, 2)
      );
      if (distance < minDistance) {
        minDistance = distance;
        closestCity = city as CityCode;
      }
    }

    return closestCity;
  };

  // Автоопределение города по IP (только если нет в URL и localStorage)
  const detectCityByIP = async () => {
    try {
      // Сначала пытаемся использовать геолокацию браузера (более точно)
      if (navigator.geolocation) {
        return new Promise<CityCode>((resolve) => {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              const city = await detectCityByCoordinates(
                position.coords.latitude,
                position.coords.longitude
              );
              resolve(city);
            },
            async () => {
              // Если геолокация недоступна, используем IP
              const response = await fetch('https://ipapi.co/json/', {
                signal: AbortSignal.timeout(2000)
              });
              const data = await response.json();
              
              // Пытаемся определить город по названию города из API
              if (data.city) {
                const cityName = data.city.toLowerCase();
                // Проверяем точные совпадения
                if (cityName.includes('lida') || cityName.includes('лида')) {
                  resolve('lida');
                  return;
                }
                if (cityName.includes('minsk') || cityName.includes('минск') || cityName.includes('mińsk')) {
                  resolve('minsk');
                  return;
                }
                if (cityName.includes('warsaw') || cityName.includes('варшава') || cityName.includes('warszawa')) {
                  resolve('warsaw');
                  return;
                }
              }
              
              // Если город не определен, используем маппинг по стране
              const detectedCity = countryToCity[data.country_code] || 'minsk';
              resolve(detectedCity);
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
          return 'lida';
        }
        if (cityName.includes('minsk') || cityName.includes('минск') || cityName.includes('mińsk')) {
          return 'minsk';
        }
        if (cityName.includes('warsaw') || cityName.includes('варшава') || cityName.includes('warszawa')) {
          return 'warsaw';
        }
      }
      
      // Если город не определен, используем маппинг по стране
      const detectedCity = countryToCity[data.country_code] || 'minsk';
      return detectedCity;
    } catch {
      return 'minsk';
    }
  };

  // Инициализация города
  useEffect(() => {
    const initializeCity = async () => {
      // 1. Проверяем URL
      const cityFromPath = getCityFromPath();
      if (cityFromPath) {
        setCurrentCityState(cityFromPath);
        localStorage.setItem('selectedCity', cityFromPath);
        setIsInitialized(true);
        return;
      }

      // 2. Проверяем localStorage
      const savedCity = localStorage.getItem('selectedCity') as CityCode | null;
      if (savedCity && cities[savedCity]) {
        setCurrentCityState(savedCity);
        navigate(`/${savedCity}`, { replace: true });
        setIsInitialized(true);
        return;
      }

      // 3. Автоопределение по IP (в фоне, не блокируем)
      const detectedCity = await detectCityByIP();
      setCurrentCityState(detectedCity);
      localStorage.setItem('selectedCity', detectedCity);
      navigate(`/${detectedCity}`, { replace: true });
      setIsInitialized(true);
    };

    if (!isInitialized) {
      initializeCity();
    }
  }, [location.pathname, navigate, isInitialized]);

  // Синхронизация с URL при изменении пути
  useEffect(() => {
    const cityFromPath = getCityFromPath();
    if (cityFromPath && cityFromPath !== currentCity) {
      setCurrentCityState(cityFromPath);
      localStorage.setItem('selectedCity', cityFromPath);
    }
  }, [location.pathname, currentCity]);

  const setCity = (city: CityCode) => {
    setCurrentCityState(city);
    localStorage.setItem('selectedCity', city);
    navigate(`/${city}`);
  };

  const value: CityContextType = {
    currentCity,
    setCity,
    cityConfig: cities[currentCity]
  };

  return <CityContext.Provider value={value}>{children}</CityContext.Provider>;
};

