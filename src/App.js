import React, { Suspense, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Navbar/Header";
import { AuthContext } from "./components/ContextApi/auth-Context";

// Lazy load components
const About = React.lazy(() => import("./components/About/About"));
const Store = React.lazy(() => import("./components/Store/Store"));
const ContactUs = React.lazy(() => import("./components/Contact/ContactUs"));
const Home = React.lazy(() => import("./components/Home/Home"));
const LoginPage = React.lazy(() => import("./components/Authentication/LoginPage"));
const Welcome = React.lazy(() => import("./components/Home/Welcome"));
const ProductPage = React.lazy(() => import("./components/Store/ProductPage"));

function App() {
  const Authctx = useContext(AuthContext);

  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
              {Authctx.isLoggedIn ? (
                <>
                  <Route path="/home" element={<Home />} />
                  <Route path="/" element={<Store />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact-us" element={<ContactUs />} />
                  <Route path="/product/:productId" element={<ProductPage />} />
                </>
              ) : (
                <>
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/" element={<Welcome />} />
                </>
              )}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
}

export default App;
