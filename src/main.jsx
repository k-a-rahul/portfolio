import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../src/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About.jsx";
import Reachme from "./Components/Reachme.jsx";
import Home from "./Components/Home.jsx";

const routes = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/reachme",
        element: <Reachme />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes}>
    <App />
  </RouterProvider>
);
