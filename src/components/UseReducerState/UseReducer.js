import React, { useReducer, useState } from "react";
import Reducer from "./ReducerState";

const UseReducer = () => {
  //const [number, setNumber] = useState(0);
  const initialState = 0;
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <div>
      <h1>{state}</h1>
      <div className="btnStylePosition">
        <button onClick={() => dispatch({ type: "INCREMENT" })}>Inc</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>Dre</button>
      </div>
    </div>
  );
};

export default UseReducer;
