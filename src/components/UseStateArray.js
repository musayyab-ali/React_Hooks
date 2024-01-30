import React, { useState } from "react";

const UseStateArray = () => {
  const bioData = [
    {
      id: 0,
      name: "Arman",
      lastName: "Mehar",
      age: 25,
    },
    {
      id: 1,
      name: "Mehar",
      lastName: "Arham",
      age: 21,
    },
    {
      id: 3,
      name: "Fatima",
      lastName: "Mahmood",
      age: 23,
    },
  ];

  const [bioArray, setBioArray] = useState(bioData);
  const clearBioArray = () => {
    setBioArray([]);
  };
  const removeElem = (id) => {
    const newArray = bioArray.filter((curElm) => {
      return curElm.id !== id;
    });
    setBioArray(newArray);
  };

  return (
    <>
      {bioArray.map((curElm) => {
        return (
          <h1 className="h1style" key={curElm.id}>
            Name:{curElm.name} & LastName:{curElm.lastName} & Age:{curElm.age}
            <button className="btnInner" onClick={() => removeElem(curElm.id)}>
              Remove
            </button>
          </h1>
        );
      })}
      <button className="btn" onClick={clearBioArray}>
        Clear
      </button>
    </>
  );
};

export default UseStateArray;
