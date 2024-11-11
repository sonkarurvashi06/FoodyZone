import {Link} from "react-router-dom"
import React from 'react'
function Contact() {
    return (
      <div>
        <h1>contact page</h1>
        <Link to="/">go too home page</Link><br/>
         <Link to="/contact">contact page</Link> 
      </div>
    );


}
export default Contact