import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./app/store";

export type Type1Upgrade = {
  level: number;
  cost: number;
  clickMultiplier: number;
}

export type Type2Upgrade = {
  level: number;
  cost: number;
  incomePerSecond: number;
  activated: boolean;
}

export type UpgradeState = {
  type1: Type1Upgrade;
  type2: Type2Upgrade;
}

export const initialState: UpgradeState = {
  type1: {
    level: 0,
    cost: 10,
    clickMultiplier: 1,
  },
  type2: {
    level: 0,
    cost: 20,
    incomePerSecond: 3,
    activated: false,
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
    buyType2Upgrade: (state) => {
      const type2Upgrade = state.type2;
      type2Upgrade.level += 1;
      type2Upgrade.cost += 20;
      type2Upgrade.incomePerSecond += 3;
      type2Upgrade.activated = true;
    },
    activateType2Upgrade: (state) => {
      state.type2.activated = true;
    },
  },
});

export const { buyType1Upgrade, buyType2Upgrade, activateType2Upgrade } =
  upgradeSlice.actions;

export const selectType1UpgradeLevel = (state: RootState) =>
  state.upgrade.type1.level;
export const selectType1UpgradeCost = (state: RootState) =>
  state.upgrade.type1.cost;

export const selectType2UpgradeLevel = (state: RootState) =>
  state.upgrade.type2.level;
export const selectType2UpgradeCost = (state: RootState) =>
  state.upgrade.type2.cost;
export const selectType2UpgradeActivated = (state: RootState) =>
  state.upgrade.type2.activated;
export const selectType2UpgradeIncomePerSecond = (state: RootState) =>
  state.upgrade.type2.incomePerSecond;

export default upgradeSlice.reducer;
