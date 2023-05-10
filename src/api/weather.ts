import { WeatherResponseDTO } from '../types/weather.interface';

export const weatherApi = {
  getWeather(cityName: string, languageCode: string): Promise<WeatherResponseDTO> {
    return fetch(
      `https://api.openweathermap.org/data/2.5/forecast?appid=${process.env.REACT_APP_API_TOKEN}&lang=${languageCode}&units=metric&q=${cityName}`
    )
      .then((response) => {
        return response.json();
      })
      .then((result: WeatherResponseDTO) => {
        return result;
      });
  }
};
