# Weather App – Aplicativo de Previsão do Tempo

Um aplicativo de linha de comando em TypeScript que permite ao usuário digitar o nome de uma cidade e receber informações climáticas como temperatura, velocidade do vento e umidade, utilizando a API Open-Meteo.
O projeto possui tratamento de erros, validação da entrada do usuário e registro de logs das respostas obtidas.

Aplicativo de clima em TypeScript usando Open-Meteo API# WeatherApp

# Visão Geral
Este aplicativo demonstra:

- Consumo de API externa usando TypeScript.
- Organização modular do código (services, utils, controllers, views).
- Tratamento de erros para entradas inválidas.
- Registro de logs em arquivo.
- Obtenção automática de coordenadas pelo nome da cidade.

# Estrutura do Projeto
src/
 ├── config/         # Arquivos de configuração
 ├── controller/     # Controlador que gerencia o fluxo do app
 ├── services/       # Serviços de APIs (geocoding + clima)
 ├── types/          # Tipos usados no projeto
 ├── utils/          # Funções auxiliares (logger, helpers)
 ├── views/          # Exibição e interface via CLI
 └── main.ts         # Arquivo principal

 # Instalação
 1. Clone o repositório
 git clone <url-do-repositorio>
 cd IA

 2. Instale as dependências
 npm install

 3. Configure o arquivo .env
 Se ainda não existir, crie um .env com:
 API_URL=https://api.open-meteo.com/v1/forecast
 GEOCODE_URL=https://geocoding-api.open-meteo.com/v1/search

 4. Compile o projeto
 npm run build

 5. Execute o aplicativo
 npm start

# Como Usar?
1. Abra o terminal e execute npm start.
2. Digite o nome da cidade quando solicitado.
3. O app exibirá automaticamente:
    - 🌡️ Temperatura
    - 💨 Velocidade do vento
    - 💧 Umidade
4. Toda requisição será registrada em um arquivo de log.

# Funcionalidades
✔️ Busca de cidade e conversão automática para coordenadas
✔️ Consulta de temperatura, umidade e vento
✔️ Tratamento de erros para cidades inexistentes
✔️ Registro de logs em arquivo
✔️ Arquitetura organizada e modular
✔️ Desenvolvido em TypeScript


