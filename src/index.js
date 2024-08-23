import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import "bootstrap/dist/css/bootstrap.min.css";
//import App1 from './App1';
//import Hide from "./Hide";
//import User from './User';
import Site from './Site'
//import "bootstrap/dist/css/bootstrap.min.css";
// import Reuse from './Reuse';

import reportWebVitals from "./reportWebVitals";
//import Basicform from './Basicform';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode>
 <Site/>  
  // <Reuse/>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
