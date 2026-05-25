export interface Coordinates {
  latitude: number;
  longitude: number;
  name: string;
}

export interface WeatherData {
  temperature: number;
  humidity: number;
  windSpeed: number;
  cityName: string;
}

export interface ApiError {
  error: boolean;
  message: string;
}