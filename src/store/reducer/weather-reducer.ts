import { WEATHER_ACTIONS, WeatherAction, WeatherState } from '../../types/weather.interface';

const initialState: WeatherState = {
  weather: null,
  weatherOnHours: null,
  isPending: true,
  isError: false,
  days: [],
  currentDayWeather: null
};

const weatherReducer = (state = initialState, action: WeatherAction): WeatherState => {
  switch (action.type) {
    case WEATHER_ACTIONS.SET_WEATHER:
      return {
        ...state,
        weather: action.weather ? action.weather : state.weather,
        days: action.days ? action.days : state.days
      };
    case WEATHER_ACTIONS.SET_PENDING:
      return { ...state, isPending: action.isPending ? action.isPending : state.isPending };
    case WEATHER_ACTIONS.SET_ERROR:
      return { ...state, isError: action.isError ? action.isError : state.isError };
    case WEATHER_ACTIONS.CHANGE_DAY:
      return {
        ...state,
        currentDayWeather: state.days[action.dayIndex ? action.dayIndex : 0]
        // weatherOnHours: {
        //   temp: state.days![action.payload].weather.map((temp) => Math.round(+temp.main.temp)),
        //   date: state.days![action.payload].weather.map((temp) => temp.dt_txt)
        // }
      };

    default: {
      return state;
    }
  }
};

export default weatherReducer;
