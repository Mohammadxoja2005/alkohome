import React from "react";
import { createBrowserRouter } from "react-router-dom";

// pages
import HOME from "../pages/home";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <HOME />,
    }
])