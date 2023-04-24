import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
// react-router-dom
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);

reportWebVitals();
