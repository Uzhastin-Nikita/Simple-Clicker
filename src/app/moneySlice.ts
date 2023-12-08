import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface MoneyState {
  money: any;
  totalMoney: number;
  type1Upgrade: number;
  type2UpgradeActivated: boolean;
}

const initialState: MoneyState = {
  totalMoney: 0,
  type1Upgrade: 1,
  type2UpgradeActivated: false,
  money: undefined
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
      state.type1Upgrade += 1;
    },
    resetType2Upgrade: (state) => {
      state.type2UpgradeActivated = false;
    },
  },
});

export const { click, buyUpgrade, resetType2Upgrade } = moneySlice.actions;
export const selectTotalMoney = (state: RootState) => state.money.totalMoney;
export const selectType2UpgradeActivated = (state: RootState) =>
  state.money.type2UpgradeActivated;

export default moneySlice.reducer;
