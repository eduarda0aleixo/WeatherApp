import { WeatherService } from '../services/WeatherService';
import { isValidCityName, sanitizeCityName } from '../utils/validator';
import { DisplayView } from '../views/DisplayView';

export class WeatherController {
  private weatherService: WeatherService;
  private displayView: DisplayView;

  constructor() {
    this.weatherService = new WeatherService();
    this.displayView = new DisplayView();
  }

  async getWeatherAndDisplay(cityName: string): Promise<void> {
    // Valida o nome da cidade
    if (!isValidCityName(cityName)) {
      this.displayView.displayError('Nome de cidade inválido. Use um nome com pelo menos 2 letras.');
      return;
    }

    // Sanitiza o nome (remove espaços extras, capitaliza)
    const sanitizedCity = sanitizeCityName(cityName);
    
    this.displayView.displayLoading();

    try {
      const weather = await this.weatherService.getWeatherByCity(sanitizedCity);
      this.displayView.displayWeather(weather);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
      this.displayView.displayError(errorMessage);
    }
  }
}