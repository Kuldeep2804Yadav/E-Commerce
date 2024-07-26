import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import { ContextProvider } from "./components/ContextApi/Context";
import Store from "./components/Home/Store";
import About from "./components/About/About";

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
        path:"/",
        element:<Store />
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
