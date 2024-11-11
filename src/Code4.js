import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import React from 'react';
function Code4() {
  return <RouterProvider router={router} />;
  
  
}
const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home></Home>,
  }
])
function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the Home Page!</p>
      <Link to="/home">Go to About Page</Link>
    </div>
  );
}




export default Code4;