import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
 import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
// import React1 from "./React1";
 import Codepro from "./Codepro";

import { createGlobalStyle} from "styled-components";
const GobalStyle = createGlobalStyle`


// *{
// box-sizing:border-box;
// margin:0;
// padding:0;

// }

// body{
// background-color: #323343;
// color:white;
// min-height: 100vh;
//     font-family: "Roboto", sans-serif; ;

// }`;






const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>

 <Codepro/>

    
    
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
