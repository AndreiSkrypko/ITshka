import { CityCode } from '@/config/cities';

// Координаты всех городов
const cityCoordinates: Record<CityCode, { lat: number; lon: number }> = {
  lida: { lat: 53.8833, lon: 25.2997 },
  minsk: { lat: 53.9045, lon: 27.5615 },
  warsaw: { lat: 52.2297, lon: 21.0122 },
  brest: { lat: 52.0975, lon: 23.7341 },
  vitebsk: { lat: 55.1904, lon: 30.2049 },
  gomel: { lat: 52.4345, lon: 30.9754 },
  grodno: { lat: 53.6884, lon: 23.8258 },
  mogilev: { lat: 53.8945, lon: 30.3307 }
};

/**
 * Вычисляет расстояние между двумя точками на Земле (формула гаверсинуса)
 * @param lat1 Широта первой точки
 * @param lon1 Долгота первой точки
 * @param lat2 Широта второй точки
 * @param lon2 Долгота второй точки
 * @returns Расстояние в километрах
 */
export const calculateDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number => {
  const R = 6371; // Радиус Земли в км
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

/**
 * Находит ближайший город по координатам
 * @param lat Широта пользователя
 * @param lon Долгота пользователя
 * @returns Объект с кодом ближайшего города и расстоянием до него
 */
export const findNearestCity = (
  lat: number,
  lon: number
): { city: CityCode; distance: number; isInCity: boolean } => {
  let minDistance = Infinity;
  let closestCity: CityCode = 'minsk';

  for (const [city, coords] of Object.entries(cityCoordinates)) {
    const distance = calculateDistance(lat, lon, coords.lat, coords.lon);
    if (distance < minDistance) {
      minDistance = distance;
      closestCity = city as CityCode;
    }
  }

  // Считаем, что пользователь в городе, если расстояние меньше 30 км
  const isInCity = minDistance < 30;

  return {
    city: closestCity,
    distance: minDistance,
    isInCity
  };
};

/**
 * Получает координаты пользователя через геолокацию или IP
 * @returns Promise с координатами или null
 */
export const getUserCoordinates = async (): Promise<{ lat: number; lon: number } | null> => {
  // Сначала пытаемся использовать геолокацию браузера (более точно)
  if (navigator.geolocation) {
    return new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            lat: position.coords.latitude,
            lon: position.coords.longitude
          });
        },
        async () => {
          // Если геолокация недоступна, пытаемся получить координаты по IP
          try {
            const cacheKey = 'ipapi_cache';
            const cached = sessionStorage.getItem(cacheKey);
            if (cached) {
              const cachedData = JSON.parse(cached);
              const now = Date.now();
              if (now - cachedData.timestamp < 3600000) {
                const data = cachedData.data;
                if (data.latitude && data.longitude) {
                  resolve({
                    lat: data.latitude,
                    lon: data.longitude
                  });
                  return;
                }
              }
            }

            const response = await fetch('https://ipapi.co/json/', {
              signal: AbortSignal.timeout(2000)
            });
            const data = await response.json();
            
            if (data.latitude && data.longitude) {
              // Сохраняем в кэш
              try {
                sessionStorage.setItem(cacheKey, JSON.stringify({
                  data,
                  timestamp: Date.now()
                }));
              } catch (e) {
                // Ignore cache errors
              }
              resolve({
                lat: data.latitude,
                lon: data.longitude
              });
            } else {
              resolve(null);
            }
          } catch (error) {
            resolve(null);
          }
        },
        { timeout: 2000, enableHighAccuracy: false }
      );
    });
  }

  // Если геолокация не поддерживается, используем IP
  try {
    const cacheKey = 'ipapi_cache';
    const cached = sessionStorage.getItem(cacheKey);
    if (cached) {
      const cachedData = JSON.parse(cached);
      const now = Date.now();
      if (now - cachedData.timestamp < 3600000) {
        const data = cachedData.data;
        if (data.latitude && data.longitude) {
          return {
            lat: data.latitude,
            lon: data.longitude
          };
        }
      }
    }

    const response = await fetch('https://ipapi.co/json/', {
      signal: AbortSignal.timeout(2000)
    });
    const data = await response.json();
    
    if (data.latitude && data.longitude) {
      // Сохраняем в кэш
      try {
        sessionStorage.setItem(cacheKey, JSON.stringify({
          data,
          timestamp: Date.now()
        }));
      } catch (e) {
        // Ignore cache errors
      }
      return {
        lat: data.latitude,
        lon: data.longitude
      };
    }
  } catch (error) {
    // Ignore errors
  }

  return null;
};

/**
 * Определяет ближайший город для пользователя
 * @returns Promise с кодом ближайшего города
 */
export const detectNearestCity = async (): Promise<CityCode> => {
  const coords = await getUserCoordinates();
  
  if (coords) {
    const result = findNearestCity(coords.lat, coords.lon);
    return result.city;
  }

  // Если координаты не получены, используем IP для определения страны
  try {
    const cacheKey = 'ipapi_cache';
    const cached = sessionStorage.getItem(cacheKey);
    if (cached) {
      const cachedData = JSON.parse(cached);
      const now = Date.now();
      if (now - cachedData.timestamp < 3600000) {
        const data = cachedData.data;
        // Используем маппинг по стране
        if (data.country_code === 'BY' || data.country_code === 'RU' || data.country_code === 'UA') {
          return 'minsk';
        }
        if (data.country_code === 'PL') {
          return 'warsaw';
        }
      }
    }

    const response = await fetch('https://ipapi.co/json/', {
      signal: AbortSignal.timeout(2000)
    });
    const data = await response.json();
    
    // Сохраняем в кэш
    try {
      sessionStorage.setItem(cacheKey, JSON.stringify({
        data,
        timestamp: Date.now()
      }));
    } catch (e) {
      // Ignore cache errors
    }

    if (data.country_code === 'BY' || data.country_code === 'RU' || data.country_code === 'UA') {
      return 'minsk';
    }
    if (data.country_code === 'PL') {
      return 'warsaw';
    }
  } catch (error) {
    // Ignore errors
  }

  // По умолчанию возвращаем Минск
  return 'minsk';
};

