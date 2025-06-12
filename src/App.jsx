import React, { useState, useEffect } from "react";
import { GlobalStyle } from "./styles/global";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Convert from "./components/Convert/Convert";
import Assistant from "./components/Assistant/Assistant";
// import HealthForm from "./components/HealthForm/HealthForm";
// import HomeFilteredRecipes from "./components/Home/HomeFilteredRecipes";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout"
import { Routes, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Form from "./components/Form/Form"
function App() {
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/convert", element: <Convert /> },
        { path: "/Assistant", element: <Assistant /> },
        { path: "/setup", element: <Form /> }, // ⬅️ This is your login form
      ],
    },
  ]);

  return <RouterProvider router={router} />;

}

export default App;

 
  