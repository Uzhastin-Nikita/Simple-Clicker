import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { click, buyUpgrade, selectTotalMoney } from "./app/moneySlice";
import {
  buyType1Upgrade,
  buyType2Upgrade,
  selectType1UpgradeCost,
  selectType1UpgradeLevel,
  selectType2UpgradeActivated,
  selectType2UpgradeCost,
  selectType2UpgradeIncomePerSecond,
} from "./app/upgradeSlice";

import { ImageButton } from "./components/ImageButton";

import "./App.scss";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const totalMoney = useSelector(selectTotalMoney);
  const type1Level = useSelector(selectType1UpgradeLevel) as number;
  const type1Cost = useSelector(selectType1UpgradeCost);
  const type2Activated = useSelector(selectType2UpgradeActivated);
  const type2IncomePerSecond = useSelector(selectType2UpgradeIncomePerSecond);
  const type2Cost = useSelector(selectType2UpgradeCost);

  const handleUpgradeClick = () => {
    dispatch(buyUpgrade({ cost: type1Cost }));
    dispatch(buyType1Upgrade());
  };

  const handleType2UpgradeClick = () => {
    dispatch(buyUpgrade({ cost: type2Cost }));
    dispatch(buyType2Upgrade());
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (type2Activated) {
        // @ts-ignore
        dispatch(click(type2IncomePerSecond));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch, type2Activated, type2IncomePerSecond]);

  return (
    <div>
      <h1>Total Money: {totalMoney}</h1>
      <button onClick={() => dispatch(click())}>Click</button>
      <ImageButton
        onClick={() => dispatch(click())}
        imageKey="hamburger"
        alt="Hamburger"
        disabled={false}
      />

      <button onClick={handleUpgradeClick} disabled={totalMoney < type1Cost}>
        Buy Type 1 Upgrade (Cost: {type1Cost})
      </button>
      <p>Type 1 Upgrade Level: {type1Level}</p>
      <button
        onClick={handleType2UpgradeClick}
        disabled={totalMoney < type2Cost}
      >
        Buy Type 2 Upgrade (Cost: {type2Cost})
      </button>
      {type2Activated && <p>Type 2 Upgrade Activated!</p>}
    </div>
  );
};

export default App;
