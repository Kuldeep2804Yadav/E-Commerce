import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import { ContextProvider } from "./components/ContextApi/Context";
import About from "./components/About/About";
import Store from "./components/Store/Store";
import ContactUs from "./components/Contact/ContactUs";
import Login from "./components/Authentication/Login";

const Root = () => (
  <ContextProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Store />} />
          <Route path="about" element={<About />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  </ContextProvider>
);

ReactDOM.render(<Root />, document.getElementById("root"));
