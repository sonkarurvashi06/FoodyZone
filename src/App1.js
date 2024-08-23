import "./App.css";
import logo from "./logo.svg";
//import Effect from './Effect'
// import  from './customCss.css'
 import{Button,Alert} from 'react-bootstrap'
//import React, {useEffect,useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react'
function App1() {
    return (
      <div className="App">
            <h1>instaalling bootsstrap</h1>
            {
                <Alert variant="warning">
                    this is mu alert
                </Alert>
            }
        <Button onClick={() => alert("hello")}>click</Button>
            <Button variant="outline-primary">Primary</Button>{" "}
            
      </div>
    );
    


}
export default App1