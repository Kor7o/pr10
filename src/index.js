import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Error from "./Pages/Error";
import Logement from "./Pages/Logement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
    element: <Error />,
  },
  {
    path: "/logement/:id",
    element: <Logement />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
