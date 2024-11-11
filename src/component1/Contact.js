import {Link, Outlet} from "react-router-dom"
function Contact() {
    return (
      <div>
        <h1>contact us page</h1>
        <h1>here we have contact business</h1>
        <Link to="/company">company</Link>
        <br />
        <Link to="/channel">channel</Link><br/>
            <Link to="/other">other page</Link><br />
            <Outlet/>
      </div>
    );


}
export default Contact;