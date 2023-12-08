import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store"; // Подразумевается, что у вас есть тип для RootState
import { decrement, increment } from "./redux/actions";

import { COUNT, DECREMENT, INCREMENT } from "./constants";

const App: React.FC = () => {
  const { count } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1>{`${COUNT}:`} {count}</h1>
      <button onClick={handleIncrement}>{INCREMENT}</button>
      <button onClick={handleDecrement}>{DECREMENT}</button>
    </div>
  );
};

export default App;
