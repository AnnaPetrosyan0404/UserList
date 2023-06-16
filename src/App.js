

import Useeffect from "./Useeffect/Useeffect";
import Button from './Button/Button';
import './App.css';
import { useState } from "react";
import Component1 from "./Usecontex/Usecontex";
import Login from "./Login/Login";
import ReactRouter from "./ReactRouter/ReactRouter";

function App(){

  // const [count, setCount]=useState(0)

  // function click(){
  //   setCount(count + 1)
  // }
  // function click2(){
  //   setCount(count - 1)
  // }
  return (
    <div className="App">
      <ReactRouter/>
    </div>
  );
}

export default App;
