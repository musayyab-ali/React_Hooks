import React, { useRef, useState } from "react";

const UseRef = () => {
  const [show, setShow] = useState(false);
  const luckyName = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = luckyName.current.value;
    name === "" ? alert("Please fill the field") : setShow(true);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="luckyName">UserName</label>
          <input type="text" id="luckyName" ref={luckyName} />
        </div>
        <button className="btn">Submit</button>
      </form>
      <p> {show ? `Your luck name is:${luckyName.current.value}` : ""}</p>
    </div>
  );
};

export default UseRef;
