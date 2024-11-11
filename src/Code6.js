import React from 'react'
import Code9 from "./Code9";
import { createBrowserRouter, RouterProvider,Link } from "react-router-dom";
import Dynamic from './Dynamic';
//import Dynamic from './Dynamic';
function Home1() {
    return (
      <div>
        <Link to="/about1"> home page</Link>
        {/* //<Link to="/about1"> home page</Link> */}
            <h1>about page</h1>
            <p>this is home about</p>
      </div>
    );

}
function About1() {
  return (
    <div>
     
       <Link to="/"> about</Link> 
          <h1>home page</h1>
          <p>this is home page</p>
          
    </div>
  );
}




const router = createBrowserRouter([
  {
    path: "/",
    element: <Code9 />,
  },
  {
    path: "/users/:id/:name/:email",
    element: <Dynamic></Dynamic>,
  },
  {
    path: "/about1",
    element: <About1 />,
  },
  // {
  //   path: "/users/:name",
  //   element: <Dynamic />,
  // },
]);
function Code6() {
    return <RouterProvider router={router} />;
    


}
export default Code6