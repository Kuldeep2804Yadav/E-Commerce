import React, { useContext, useEffect } from "react";
import Content from "../Heading/Content";
import Footer from "../Footer/Footer";
import { Context } from "../ContextApi/Context";
import Heading from "../Heading/Heading";

function Store() {
  const { musicData, merch, setCartOpen, setShowCart } = useContext(Context);

  useEffect(() => {
    setShowCart(true);
  }, [setShowCart]);

  const seeTheCartHandler = () => {
    setCartOpen(true);
  };

  return (
    <div className="home">
      <Heading />

      <div className="container my-5">
        <div className="row mb-4">
          <div className="col-12 text-center">
            <h1 className="mb-4">Music</h1>
          </div>
          {musicData.map((data) => (
            <div className="col-md-4 mb-4" key={data.id}>
              <Content contentData={data} />
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-12 text-center mb-4">
            <h1 className="mb-4">Merch</h1>
          </div>
          {merch.map((data) => (
            <div className="col-md-4 mb-4" key={data.id}>
              <Content contentData={data} />
            </div>
          ))}
          <div className="col-12 text-center mt-4">
            <button
              className="btn btn-primary"
              onClick={seeTheCartHandler}
            >
              See The Cart
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Store;
