// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './store/reducer/reducer';

const store = configureStore({
  reducer: userReducer, 
});

export default store;