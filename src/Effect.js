import "./App.css";
import logo from "./logo.svg";
 import Effect from './Effect'
import React, { useEffect, useState } from "react";
function App1(props) {
  
  useEffect(() => {
    alert("count is"+props.count)
  }, [props.count,props.data])
    
  return (
    <div className="App1">
      <h1>count props:{props.count}</h1>
      <h1>data props:{props.data}</h1>
      
    </div>
  );
}
export default App1;
