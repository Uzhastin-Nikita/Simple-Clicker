// src/upgradeSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./app/store";

export interface Type1Upgrade {
  level: number;
  cost: number;
  clickMultiplier: number;
}

export interface UpgradeState {
  type1: Type1Upgrade;
}

export const initialState: UpgradeState = {
  type1: {
    level: 0,
    cost: 10,
    clickMultiplier: 1,
  },
};

const upgradeSlice = createSlice({
  name: "upgrade",
  initialState,
  reducers: {
    buyType1Upgrade: (state) => {
      const type1Upgrade = state.type1;
      type1Upgrade.level += 1;
      type1Upgrade.cost += 10;
      type1Upgrade.clickMultiplier += 1;
    },
  },
});

export const { buyType1Upgrade } = upgradeSlice.actions;
export const selectType1Level = (state: RootState) => state.upgrade.type1.level;
export const selectType1Cost = (state: RootState) => state.upgrade.type1.cost;
export const selectType1ClickMultiplier = (state: RootState) =>
  state.upgrade.type1.clickMultiplier;

export default upgradeSlice.reducer;
