import React, { useState } from "react";

const UseStateObject = () => {
  const [nameObject, setNameObject] = useState({
    Name: "Arman Mehar",
    Age: 25,
    Degree: "BSCS",
    institute: "Superior University",
  });
  const updateNameObject = () => {
    setNameObject({ ...nameObject, Name: "Arham Tariq", Age: 24 });
  };

  return (
    <div>
      <h1 className="h1style">
        Name:{nameObject.Name} & Age:{nameObject.Age} & Degree:
        {nameObject.Degree} & Institute:{nameObject.institute}
      </h1>
      <button className="btn" onClick={updateNameObject}>
        Update
      </button>
    </div>
  );
};

export default UseStateObject;
