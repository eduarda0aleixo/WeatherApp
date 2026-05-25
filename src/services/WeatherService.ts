import axios from 'axios';
import { API_CONFIG } from '../config/api.config';
import { Coordinates, WeatherData } from '../types';

export class WeatherService {
  
  async getCoordinates(cityName: string): Promise<Coordinates> {
    try {
      const response = await axios.get(API_CONFIG.GEOCODING_URL, {
        params: {
          name: cityName,
          count: 1,
          language: 'pt',
          format: 'json'
        }
      });

      if (!response.data.results || response.data.results.length === 0) {
        throw new Error(`Cidade "${cityName}" não encontrada`);
      }

      const result = response.data.results[0];
      return {
        latitude: result.latitude,
        longitude: result.longitude,
        name: result.name
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(`Erro na geocodificação: ${error.message}`);
      }
      throw error;
    }
  }

  async getWeather(coordinates: Coordinates): Promise<WeatherData> {
    try {
      const response = await axios.get(API_CONFIG.WEATHER_URL, {
        params: {
          latitude: coordinates.latitude,
          longitude: coordinates.longitude,
          current_weather: true,
          hourly: 'temperature_2m,relative_humidity_2m,windspeed_10m',
          timezone: 'America/Sao_Paulo'
        }
      });

      const currentWeather = response.data.current_weather;
      const hourlyData = response.data.hourly;

      return {
        temperature: currentWeather.temperature,
        humidity: hourlyData.relative_humidity_2m?.[0] || 0,
        windSpeed: currentWeather.windspeed,
        cityName: coordinates.name
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(`Erro ao buscar clima: ${error.message}`);
      }
      throw error;
    }
  }

  async getWeatherByCity(cityName: string): Promise<WeatherData> {
    const coordinates = await this.getCoordinates(cityName);
    const weather = await this.getWeather(coordinates);
    return weather;
  }
}