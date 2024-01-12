import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import moneyReducer from "./moneySlice";
import upgradeReducer from "./upgradeSlice";

const rootReducer = combineReducers({
  money: moneyReducer,
  upgrade: upgradeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const startMoneyUpdateInterval = (store: any) => {
  setInterval(() => {
    const state = store.getState();
    const { type2Upgrade } = state.money;
    if (type2Upgrade) {
      store.dispatch({ type: "money/click" });
    }
  }, 1000);
};

const store = configureStore({
  reducer: rootReducer,
});

startMoneyUpdateInterval(store);

export default store;
