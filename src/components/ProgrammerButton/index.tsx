import React from "react";
import { useDispatch } from "react-redux";
import { clickCookie } from "../../programerSlice";

const CookieButton: React.FC = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clickCookie());
  };

  return <button onClick={handleClick}>{"Click me for money!"}</button>;
};

export default CookieButton;
