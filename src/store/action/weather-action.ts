import {WEATHER_ACTIONS, WeatherAction, WeatherResponseDTO, WeatherState} from '../../types/weather.interface';
import { weatherApi } from '../../api/weather';
import { ThunkAction } from '@reduxjs/toolkit';

export const setError = (isError: boolean): WeatherAction => {
  return {
    type: WEATHER_ACTIONS.SET_ERROR,
    isError
  };
};
export const setPending = (isPending: boolean): WeatherAction => {
  return {
    type: WEATHER_ACTIONS.SET_PENDING,
    isPending
  };
};

export const setWeather = (_weatherInfo: WeatherResponseDTO): WeatherAction => {
  return {
    type: WEATHER_ACTIONS.SET_WEATHER
    // TODO: pass the weatherInfo
  };
};

export const changeDay = (dayIndex: number): WeatherAction => {
  return {
    type: WEATHER_ACTIONS.CHANGE_DAY,
    dayIndex
  };
};

export const getWeatherThunk =
  (city: string, languageCode: string): ThunkAction<void, WeatherState, unknown, WeatherAction> =>
  async (dispatch) => {
    try {
      dispatch(setPending(true));
      dispatch(setError(false));
      const weather = await weatherApi.getWeather(city, languageCode);

      dispatch(setWeather(weather));
      dispatch(changeDay(0));
    } catch (e) {
      dispatch(setError(true));
    } finally {
      dispatch(setPending(false));
    }
  };
