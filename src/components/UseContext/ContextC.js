import React, { useContext } from "react";
import { BioData } from "./ContextA";

const ContextC = () => {
  const name = useContext(BioData);
  return (
    <div>
      <h1>Well Come {name}</h1>
    </div>
  );
};

export default ContextC;
