import React, {  useContext, useState } from "react";
import "./Contact.css";
import Heading from "../Heading/Heading";
import { Context } from "../ContextApi/Context";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const ContextCtx = useContext(Context);
  ContextCtx.setShowCart(false);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitUserData = async (formData) => {
    try {
      const response = await fetch(
        "https://ecommerce-50843-default-rtdb.firebaseio.com/userData.json",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Data Not Submitted.....");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    submitUserData(formData);
    setFormData({ name: "", email: "", phone: "" });
    alert("Your Data Has Submitted.. 🙏");
  };

  return (
    <div>
      <Heading />
      <form onSubmit={formSubmitHandler} className="contact-form mt-3">
        <h1>Contact US</h1>
        <hr />
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={inputHandler}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={inputHandler}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={inputHandler}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
