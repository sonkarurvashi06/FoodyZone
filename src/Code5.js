// App.jsx
import React from "react";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

// Define some components for different routes
function Home() {
    
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the Home Page!</p>
      <Link to="/about">Go to About Page</Link>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About Page</h2>
      <p>This is the About Page.</p>
      <Link to="/home">Go to Home Page</Link>
    </div>
  );
}

function UserProfile({ params }) {
  return (
    <div>
      <h2>User Profile</h2>
      <p>User ID: {params.id}</p>
      <Link to="/">Go to Home Page</Link>
    </div>
  );
}

// Create a router with the routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "user/:id",
    element: <UserProfile />,
  },
]);

// The main App component
function Code5() {
  return <RouterProvider router={router} />;
}

export default Code5;
