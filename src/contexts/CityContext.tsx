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

  // Автоопределение города по IP (только если нет в URL и localStorage)
  const detectCityByIP = async () => {
    try {
      const response = await fetch('https://ipapi.co/json/', {
        signal: AbortSignal.timeout(2000)
      });
      const data = await response.json();
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

