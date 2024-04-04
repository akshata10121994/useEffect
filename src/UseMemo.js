import React, { useState } from "react";

const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const themeStyle = {
    backgroundColor : dark ? "black" : "white",
    color : dark ? "white" : "black"
  }

  function slowFunction(num) {
    for (let i = 0; i <= 2000000000; i++) {}
    return num * 2;
  }
  const doubleNumber = slowFunction(number);

  return (
    <>
      <input
        type="Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <br />
      {/* <button onClick={}>Change Theme</button> */}
      <div>{doubleNumber}</div>
    </>
  );
};

export default UseMemo;
