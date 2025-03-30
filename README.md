# 🌤️ Weather App

## Tech Stack

- **Frontend:** React.js, Tailwind CSS, Framer Motion
- **State Management:** React Hooks
- **API:** OpenWeatherMap API
- **Icons:** React Icons

## Setup Instructions

### 1. Clone the repository
```
git clone https://github.com/Chet4nSingh/WeatherApp.git
cd WeatherApp
```

### 2. Install dependencies
```
npm install
```

### 3. Get API Key from OpenWeatherMap
1. Sign up at [OpenWeatherMap](https://openweathermap.org/)
2. Generate an API key from the API Keys section
3. Create a .env file in the project root and add your key:

```
VITE_API_KEY=your_api_key
```

### 4. Start the development server
```
npm run dev
```

## API Integration Details

- Endpoints Used:
  - `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`
  - `https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}`

- Rate Limits: Free-tier allows up to **60 requests per minute**
- Units: Default is **Kelvin**, but converted to **Celsius**
- Weather Icons: Used from **OpenWeatherMap**

