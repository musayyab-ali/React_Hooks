import React, { useState } from "react";

const RulesHook = () => {
  const [title, setTitle] = useState("Well Come To Learn React Hooks...");
  let val = title;
  const changeTitle = () => {
    val === "Well Come To Learn React Hooks..."
      ? setTitle("Thankx Respect Able Prof..")
      : setTitle("Well Come To Learn React Hooks...");
  };

  return (
    <>
      <h1>{title}</h1>
      <button className="btn" onClick={changeTitle}>
        Click on Button
      </button>
    </>
  );
};

export default RulesHook;
