
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <a href="/">home</a>
          <br></br>
        </li>
        <li>
          <a href="/about2">about</a>
        </li>

        <br></br>
        <li>
          <a href="/contact">contact</a>
        </li>
      </ul>
    </div>
  );    

}
export default Navbar