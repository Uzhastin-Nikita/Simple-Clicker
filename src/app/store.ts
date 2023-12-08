import { configureStore } from '@reduxjs/toolkit';
import moneyReducer from '../moneySlice';
import upgradeReducer from '../upgradeSlice';

const store = configureStore({
  reducer: {
    money: moneyReducer,
    upgrade: upgradeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
