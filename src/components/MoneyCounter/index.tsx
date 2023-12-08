import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const MoneyCounter: React.FC = () => {
  const money = useSelector((state: RootState) => state.money.money);

  return <p>Money: {money}</p>;
};

export default MoneyCounter;
