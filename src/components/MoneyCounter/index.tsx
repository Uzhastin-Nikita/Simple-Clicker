import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const CookieCounter: React.FC = () => {
  const money = useSelector((state: RootState) => state.cookie.cookies);

  return <p>Money: {money}</p>;
};

export default CookieCounter;
