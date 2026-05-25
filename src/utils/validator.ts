export function isValidCityName(cityName: string): boolean {
  // Verifica se não é vazio ou só espaços
  if (!cityName || cityName.trim() === '') {
    return false;
  }

  // Remove espaços extras e verifica comprimento
  const trimmed = cityName.trim();
  if (trimmed.length < 2) {
    return false; 
  }

  if (trimmed.length > 100) {
    return false;
  }

  // Verifica se tem pelo menos uma letra (evita números sozinhos)
  const hasLetter = /[a-zA-ZÀ-ú]/.test(trimmed);
  if (!hasLetter) {
    return false;
  }

  return true;
}

export function sanitizeCityName(cityName: string): string {
  return cityName
    .trim()                    // Remove espaços do início e fim
    .replace(/\s+/g, ' ')      // Substitui múltiplos espaços por um só
    .split(' ')                // Divide em palavras
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitaliza
    .join(' ');                // Junta novamente
}
export function isValidTemperature(temperature: number): boolean {
  // Limites realistas para temperatura na Terra
  return temperature >= -90 && temperature <= 60;
}

export function formatCityDisplay(cityName: string): string {
  const sanitized = sanitizeCityName(cityName);
  
  // Adiciona prefixo especial para cidades brasileiras (opcional)
  const brazilianCities = ['São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador', 'Fortaleza', 'Belo Horizonte'];
  if (brazilianCities.includes(sanitized)) {
    return `${sanitized} 🇧🇷`;
  }
  
  return sanitized;
}