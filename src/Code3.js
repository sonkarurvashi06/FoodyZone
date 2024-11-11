// import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
// import Home from "./component1/Home";
// import About from "./component1/About";
// //import NavBar from "./component1/Navbar";
// import Page from "./component1/Page";
// import Using from "./component1/Using";
// import Property from "./component1/Property";
// import Links from "./component1/Links";
// //import Filter from "./component1/Filter";
// import Contact from "./component1/Contact";
// import Channel from "./component1/Channel";
// import Company from "./component1/Company";
// import Other from "./component1/Other";
//  import Login from "./component1/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hiii</h1>
        <Links />

        <br />
      </div>
    ),
  },
  {
    path: "/Using",
    element: <Using></Using>,
  },
  {
    path: "/Login",
    element: <Login></Login>,
  },

  {
    path: "/Property",
    element: <Property></Property>,
  },
  // {
  //   path: "/Filter",
  //   element: <Filter></Filter>,
  // },

  {
    path: "/home",
    element: <Home></Home>,
  },
  {
    path: "/about",
    element: <About></About>,
  },
  {
    path: "/contact",
    element: <Contact></Contact>,
  },
  {
    path: "/Company/",

    element: (
      <div>
        <Contact></Contact>
        <Company></Company>
      </div>

    ),
  },
  {
    path: "/Channel",
    element: <Channel></Channel>,
  },
  {
    path: "/Other",
    element: <Other></Other>,
  },

  {
    path: "*",
    element: <Page></Page>,
  },
]);
function Code3() {
  return <RouterProvider router={router} />;


}
export default Code3;
