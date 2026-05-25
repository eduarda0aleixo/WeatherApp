import * as readline from 'readline';
import { WeatherController } from './controller/WeatherController';

async function main() {
  const controller = new WeatherController();
  const args = process.argv.slice(2);
  const cityName = args[0];
  
  if (cityName) {
    await controller.getWeatherAndDisplay(cityName);
  } else {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question('Digite o nome da cidade: ', async (answer: string) => {  
      await controller.getWeatherAndDisplay(answer);
      rl.close();
    });
  }
}

// Executa o programa
main().catch((error: Error) => { 
  console.error('Erro fatal:', error);
  process.exit(1);
});