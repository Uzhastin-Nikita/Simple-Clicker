// src/App.tsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  click,
  buyUpgrade,
  selectTotalMoney,
} from "./moneySlice";
import {
  buyType1Upgrade,
  selectType1Cost,
  selectType1Level,
} from "./upgradeSlice";
import { RootState } from "./app/store";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const totalMoney = useSelector(selectTotalMoney);
  const type1Level = useSelector(selectType1Level);
  const type1Cost = useSelector(selectType1Cost);

  const handleUpgradeClick = () => {
    dispatch(buyUpgrade({ cost: type1Cost }));
    dispatch(buyType1Upgrade());
  };

  return (
    <div>
      <h1>Total Money: {totalMoney}</h1>
      <button onClick={() => dispatch(click())}>Click</button>
      <button onClick={handleUpgradeClick} disabled={totalMoney < type1Cost}>
        Buy Type 1 Upgrade (Cost: {type1Cost})
      </button>
      <p>Type 1 Upgrade Level: {type1Level}</p>
    </div>
  );
};

export default App;
