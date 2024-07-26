import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import { ContextProvider } from "./components/ContextApi/Context";
import About from "./components/About/About";
import Store from "./components/Store/Store";
import Home from "./components/HomePage/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ContextProvider>
        <App />
      </ContextProvider>
    ),
    children:[
      {
        path:"/home",
        element:<Home/>
      },
      {
        path:"/",
        element:<Store/>
      },
      {
        path:"/about",
        element:<About/>
      }
    ]
  },
 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
