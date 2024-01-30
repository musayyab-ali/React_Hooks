import React, { useEffect, useState } from "react";

const UseEffectCleanUp = () => {
  const [screen, setScreen] = useState(window.screen.width);
  const ActualScreen = () => {
    setScreen(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", ActualScreen);
    return () => {
      window.removeEventListener("resize", ActualScreen);
    };
  }, [screen]);
  return (
    <div>
      <h1>The Actual Size Of The Window Screen Is: </h1>
      <h1>{screen}</h1>
    </div>
  );
};

export default UseEffectCleanUp;
