
import React from 'react';
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the Home Page!</p>
      <Link to="/">home page</Link>
      <br />
      <Link to="/about">about paget</Link><br/>
      <Link to="/contact">contact paget</Link>
      {/* <Link to="/about">about paget</Link>  */}
    </div>
  );
}
function Contact() {
  return (
    <div>
      <h2>contact Page</h2>
      <p>Welcome to the contact Page!</p>
      <Link to="/Conact">contact</Link>

      <Link to="/about">about paget</Link>
      <br />
      <Link to="/">about paget</Link>
    </div>
  );
}
function PageNotFound() {
  return (
    <div>
      <h2>404 Page</h2>
      <p>Welcome to the 404 page!</p>
      
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About Page</h2>
      <p>This is the About Page.</p>
      <Link to="/about">about paget</Link>
      <br />
      <Link to="/">home paget</Link><br/>
      <Link to="*">pagenot found  page</Link>
    </div>
  );
}






const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);





function Code8() {
       return <RouterProvider router={router} />;


}

export default Code8;