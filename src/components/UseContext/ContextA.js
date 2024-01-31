import React, { createContext } from "react";
import ContextB from "./ContextB";

const BioData = createContext();

const ContextA = () => {
  return (
    <div>
      <BioData.Provider value={"Arman Mehar"}>
        <ContextB />
      </BioData.Provider>
    </div>
  );
};

export default ContextA;
export { BioData };
