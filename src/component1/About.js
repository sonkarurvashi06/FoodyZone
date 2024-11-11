 import {Link}from "react-router-dom"
function About() {
  return (
    <>
      <h1>home page</h1>
      <p>this is about page</p>
      <Link to="/">go to home page</Link>
      <br/>
      <Link to="/using">anil</Link>
      <br />
      <Link to="/Property">peter</Link>
    </>
  );
}
export default About;
