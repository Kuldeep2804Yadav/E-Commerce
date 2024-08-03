import React, { useContext, useState, useEffect } from "react";
import { Button, Alert } from "react-bootstrap";
import { Context } from "../ContextApi/Context";
import { AuthContext } from "../ContextApi/auth-Context";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [login, setLogin] = useState(true);
  const [error, setError] = useState("");
  const { setShowCart } = useContext(Context);
  const AuthCtx = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    setShowCart(false);
  }, [setShowCart]);

  const switchModeHandler = () => {
    setLogin((prevState) => !prevState);
    setError("");
  };

  const handlerChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const loginFormSubmitHandler = async (event) => {
    event.preventDefault();
    setError("");

    if (formData.email === "" || formData.password === "") {
      setError("Please fill in all fields.");
      return;
    }
    let url;
    if (login) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAb0itwKRVsXM1UaP0YsBJtAHsiVutmnPs";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAb0itwKRVsXM1UaP0YsBJtAHsiVutmnPs";
    }
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const Userdata = await response.json();
      AuthCtx.login(Userdata);
      const { email, idToken } = Userdata;

      if (!response.ok) {
        throw new Error(Userdata.error.message || "Authentication failed.");
      }
      if (login) {
        localStorage.setItem("Userdata", JSON.stringify({ email, idToken }));

        alert("User Logged in Succesfully");
      } else {
        alert("User Registered Succesfully");
      }

      setFormData({ email: "", password: "" });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login text-center border-4 bg-info-subtle h-auto w-25  p-4">
      <h1 className="text-center fs-2 mt-2">{login ? "Login" : "Signup"}</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      <form onSubmit={loginFormSubmitHandler} className="m-4">
        <div>
          <label htmlFor="email">Email</label>
          <input
            className="m-2 w-100"
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handlerChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            className="m-2 w-100"
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handlerChange}
          />
        </div>
        <div className="m-2">
          <Button type="submit">{login ? "Login" : "Signup"}</Button>
          <br />
          <button
            type="button"
            className="my-4 border-0"
            onClick={switchModeHandler}
          >
            {login ? "Create an Account" : "Login With Existing Account"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
