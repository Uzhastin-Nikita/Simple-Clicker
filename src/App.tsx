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
import Typography from "./components/Typography/Typography";
import "./App.scss";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const totalMoney = useSelector(selectTotalMoney);
  const type1Level = useSelector(selectType1UpgradeLevel);
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
    <div className="container">
      <ImageButton
            onClick={() => dispatch(click())}
            imageKey="programmer"
            alt="MainClicker"
            disabled={false}
          />
      <div className="upgrades">
        <Typography variant="h1">{`Total Money: ${totalMoney}`}</Typography>
        <div className="upgrades">
          <ImageButton
            onClick={handleUpgradeClick}
            imageKey="pcMouse"
            alt="firstUpgrade"
            disabled={totalMoney < type1Cost}
          />
          <Typography variant="h3">{`First Upgrade Level: ${type1Level}`}</Typography>
          <ImageButton
            onClick={handleType2UpgradeClick}
            imageKey="keyboard"
            alt="secondUpgrade"
            disabled={totalMoney < type2Cost}
          />
          <Typography variant="h3">{`Buying Second Upgrade (Cost: ${type2Cost})`}</Typography>
        </div>
      </div>
    </div>
  );
};

export default App;
