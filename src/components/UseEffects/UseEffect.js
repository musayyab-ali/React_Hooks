import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count >= 1) {
      document.title = `Chats(${count})`;
    } else {
      document.title = `Chats`;
    }
  }, [count]);
  return (
    <div>
      <p>{count}</p>
      <button className="btn" onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
};

export default UseEffect;
