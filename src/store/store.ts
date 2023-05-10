import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './reducer/weather-reducer';

export default configureStore({
  reducer: {
    weather: weatherReducer,
  },
  devTools: process.env.NODE_ENV !== 'production'
});
