// src/moneySlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./app/store";
import { UpgradeState, selectType1ClickMultiplier } from "./upgradeSlice";

export interface MoneyState {
  totalMoney: number;
  type1Upgrade: number
}

const initialState: MoneyState = {
  totalMoney: 0,
  type1Upgrade: 1,
};

const moneySlice = createSlice({
  name: "money",
  initialState,
  reducers: {
    click: (state) => {
      state.totalMoney += 1 * state.type1Upgrade;
    },
    buyUpgrade: (state, action: PayloadAction<{ cost: number }>) => {
      state.totalMoney -= action.payload.cost;
      state.type1Upgrade += 1
    },
  },
});

export const { click, buyUpgrade } = moneySlice.actions;
export const selectTotalMoney = (state: RootState) => state.money.totalMoney;

export default moneySlice.reducer;
