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

import { dictionary } from "./constants";
import "./App.scss";
import Typography from "./components/Typography/Typography";

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
      <Typography variant="h1">{`${dictionary.TOTAL_MONEY} ${totalMoney}`}</Typography>
      <ImageButton
        onClick={() => dispatch(click())}
        imageKey="programmer"
        alt="Hamburger"
        disabled={false}
      />
      <ImageButton
        onClick={handleUpgradeClick}
        imageKey="pcMouse"
        alt="firstUpgrade"
        disabled={totalMoney < type1Cost}
      />
      <Typography variant="h3">{`${dictionary.FIRST_TYPE_UPGRADE} ${type1Level}`}</Typography>
      <ImageButton
        onClick={handleType2UpgradeClick}
        imageKey="keyboard"
        alt="secondUpgrade"
        disabled={totalMoney < type2Cost}
      />
      <Typography variant="h3">{`${dictionary.BYING_SECOND_TYPE_UPGRADE} ${dictionary.COST} ${type2Cost}`}</Typography>
    </div>
  );
};

export default App;
