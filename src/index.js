import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { ContextProvider } from "./components/ContextApi/Context";
import { AuthContextProvider } from "./components/ContextApi/auth-Context";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <AuthContextProvider>
    <ContextProvider>
      <App />
    </ContextProvider>
  </AuthContextProvider>
);
