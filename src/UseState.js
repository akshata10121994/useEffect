import "./App.css";
import React, { useState } from "react";

function UseState() {
  // const [count, setCount] = useState(()=>{
  //   console.log("run once");
  //   return 4}
  // );

  // function initialDefaultCount() {
  //   console.log("run once");
  //   return 4;
  // }
  // const [count, setCount] = useState(()=>initialDefaultCount());

  // const [state,setState] = useState({count:4,theme:"blue"})
  // const count = state.count
  // const theme = state.theme

  const [count,setCount] = useState(4)
  const [theme,setTheme] = useState("blue")

  function incrementCount() {
    // setState(prevState=>{
    //   return {...prevState,count:prevState.count+1}
    // })
    setCount(prevCount=>prevCount+1)
    setTheme("red")
  }

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
    setTheme("red")

  }
  return (
    <>
      <button onClick={incrementCount}> +</button>
      <span>{count} </span>
      <span>{theme} </span>
      <button onClick={decrementCount}>-</button>
    </>
  );
}

export default UseState;
