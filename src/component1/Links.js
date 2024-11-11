import {Link} from "react-router-dom"
function Links() {
    return (
      <div>
        <h1> this is link</h1>
        <Link to="/about">About Us</Link>
        <br />
        <br />
        <Link to="/home">home us</Link>
        <br />
        <br />

        <br />
        <br />
        <Link to="/contact">contact</Link>
        <br />
        <Link to="/company">company </Link>
        <br />
        <Link to="/channel">channel</Link>
        <br />
        <Link to="/other">other</Link><br />
        
        <Link to="/Login">login</Link>
      </div>
    );


}
export default Links;