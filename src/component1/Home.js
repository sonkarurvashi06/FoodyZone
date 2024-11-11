import { Link, useLocation } from "react-router-dom";

function Home() {
    const location = useLocation();
    console.log(location)
  return (
    <div>
      <h1>home page</h1>
      <p>this is a home age</p>
      <Link to="/about"> go to about page</Link>
      <br />
      <button >go to about page</button>
      <br />
    </div>
  );
}
export default Home;
