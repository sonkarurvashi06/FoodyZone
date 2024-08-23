//import Chai from "./chai";
//import React,{useState} from "react";

//import Name from "./hello";
//import logo from "./logo.svg";
//import Student from "./Student";
//import Parent from "./Parent";
//import "./App.css";
//import React from 'react';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      name:"saiba"
    }

}

  render()
  
  {
    return (
      <div className="App">
        <h1>props in react</h1>
        <Student name={this.state.name} email="shreya singht @" />
        <button onClick={()=>this.setState({name:"shreya"})}>Update name</button>
        <Parent />
      </div>
    );
  }
}
   
    
  



export default App;
