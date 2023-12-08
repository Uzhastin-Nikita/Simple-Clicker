import React from "react";
import { useDispatch } from "react-redux";
import { clickProgrammer } from "../../moneySlice";

const CookieButton: React.FC = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clickProgrammer());
  };

  return <button onClick={handleClick}>{"Click me for money!"}</button>;
};

export default CookieButton;
