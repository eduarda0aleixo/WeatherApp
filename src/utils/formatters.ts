export function formatTemperature(temperature: number, showUnit: boolean = true): string {
  const rounded = Math.round(temperature * 10) / 10; // Arredonda para 1 casa decimal
  return showUnit ? `${rounded}°C` : `${rounded}`;
}
export function celsiusToFahrenheit(celsius: number): number {
  return (celsius * 9/5) + 32;
}

export function formatTemperatureBoth(celsius: number): string {
  const fahrenheit = celsiusToFahrenheit(celsius);
  return `${formatTemperature(celsius)} (${formatTemperature(fahrenheit, true).replace('C', 'F')})`;
}
export function formatHumidity(humidity: number): string {
  let icon = '';
  
  if (humidity >= 80) {
    icon = '🌧️'; // Muito úmido
  } else if (humidity >= 60) {
    icon = '💧'; // Úmido
  } else if (humidity >= 40) {
    icon = '🌤️'; // Confortável
  } else if (humidity >= 20) {
    icon = '☀️'; // Seco
  } else {
    icon = '🏜️'; // Muito seco
  }
  
  return `${humidity}% ${icon}`;
}
export function formatWindSpeed(windSpeed: number): string {
  let description = '';
  
  if (windSpeed < 1) {
    description = 'Calmo';
  } else if (windSpeed < 5) {
    description = 'Brisa leve';
  } else if (windSpeed < 20) {
    description = 'Vento moderado';
  } else if (windSpeed < 40) {
    description = 'Vento forte';
  } else if (windSpeed < 60) {
    description = 'Ventania';
  } else {
    description = 'Tempestade';
  }
  
  const rounded = Math.round(windSpeed * 10) / 10;
  return `${rounded} km/h (${description})`;
}

export function getCurrentDateTime(): string {
  const now = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  return now.toLocaleDateString('pt-BR', options);
}

export function getTemperatureEmoji(temperature: number): string {
  if (temperature >= 35) {
    return '🥵'; // Muito quente
  } else if (temperature >= 28) {
    return '☀️🔥'; // Quente
  } else if (temperature >= 20) {
    return '😎'; // Agradável
  } else if (temperature >= 10) {
    return '🧥'; // Fresco
  } else if (temperature >= 0) {
    return '❄️'; // Frio
  } else {
    return '🥶'; // Muito frio
  }
}
export function getWeatherRecommendation(temperature: number, humidity: number, windSpeed: number): string {
  let recommendations = [];
  
  // Recomendações por temperatura
  if (temperature >= 30) {
    recommendations.push('☀️ Use protetor solar e mantenha-se hidratado');
  } else if (temperature <= 10) {
    recommendations.push('🧣 Vista um casaco quente');
  }
  
  // Recomendações por umidade
  if (humidity >= 70) {
    recommendations.push('☔ Pode chover - leve um guarda-chuva');
  } else if (humidity <= 30) {
    recommendations.push('💧 Beba bastante água - o ar está seco');
  }
  
  // Recomendações por vento
  if (windSpeed >= 30) {
    recommendations.push('🍃 Vento forte - tome cuidado com objetos soltos');
  }
  
  if (recommendations.length === 0) {
    return '✅ Clima agradável! Aproveite seu dia!';
  }
  
  return recommendations.join(' | ');
}