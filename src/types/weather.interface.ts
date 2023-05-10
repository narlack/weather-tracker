export enum WEATHER_ACTIONS {
  SET_WEATHER = 'SET_WEATHER',
  SET_PENDING = 'SET_PENDING',
  SET_ERROR = 'SET_ERROR',
  CHANGE_DAY = 'CHANGE_DAY'
}

export interface WeatherState {
  weather: null | object;
  weatherOnHours: null | { temp: number[]; date: string[] };
  isPending: boolean;
  isError: boolean;
  days: Array<number>;
  currentDayWeather: null | number;
}

export type WeatherAction = { type: WEATHER_ACTIONS; dayIndex?: number } & Partial<WeatherState>;

export interface WeatherResponseDTO {
  city: CityDTO;
  code: number;
  cnt: number;
  message: number;
  list: Array<WeatherItemDTO>;
}

export interface CityDTO {
  coord: { lat: number; lon: number };
  country: string;
  id: number;
  name: string;
  population: number;
  sunrise: number;
  sunset: number;
  timezone: number;
}

export interface WeatherItemDTO {
  clouds: { all: number };
  dt: number;
  dt_txt: string;
  main: WeatherInfoDTO;
  pop: number;
  sys: { pod: string };
  visibility: number;
  weather: Array<WeatherShortInfoDTO>;
  wind: WeatherWindDTO;
}

export interface WeatherInfoDTO {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_kf: number;
  temp_max: number;
  temp_min: number;
}

export interface WeatherWindDTO {
  deg: number;
  gust: number;
  speed: number;
}

interface WeatherShortInfoDTO {
  description: string;
  main: string;
  id: number;
  icon: string;
}
