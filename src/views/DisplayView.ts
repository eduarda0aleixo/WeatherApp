import { WeatherData } from '../types';
import { formatTemperature, formatHumidity, formatWindSpeed, getCurrentDateTime, getTemperatureEmoji, getWeatherRecommendation } from '../utils/formatters';
import { formatCityDisplay } from '../utils/validator';


export class DisplayView {
  
  displayWeather(weather: WeatherData): void {
    const cityDisplay = formatCityDisplay(weather.cityName);
    const tempEmoji = getTemperatureEmoji(weather.temperature);
    const dateTime = getCurrentDateTime();
    
    console.log('\n' + '='.repeat(50));
    console.log(`🌍 CLIMA EM ${cityDisplay.toUpperCase()}`);
    console.log('='.repeat(50));
    console.log(`📅 ${dateTime}`);
    console.log('-'.repeat(50));
    
    // Temperatura
    console.log(`🌡️ Temperatura: ${formatTemperature(weather.temperature)} ${tempEmoji}`);
    
    // Umidade
    console.log(`💧 Umidade: ${formatHumidity(weather.humidity)}`);
    
    // Vento
    console.log(`💨 Vento: ${formatWindSpeed(weather.windSpeed)}`);
    
    console.log('-'.repeat(50));
    
    // Recomendação personalizada
    console.log('💡 DICA:');
    console.log(`   ${getWeatherRecommendation(weather.temperature, weather.humidity, weather.windSpeed)}`);
    
    console.log('='.repeat(50) + '\n');
  }

  displayError(error: string): void {
    console.error('\n❌ ERRO:', error);
    console.error('💡 Tente novamente com um nome de cidade válido\n');
  }

  displayLoading(): void {
    const loadingFrames = ['⣾', '⣽', '⣻', '⢿', '⡿', '⣟', '⣯', '⣷'];
    console.log(`${loadingFrames[0]} Buscando dados meteorológicos...\n`);
  }
}