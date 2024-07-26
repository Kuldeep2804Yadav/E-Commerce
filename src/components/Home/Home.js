import React, { useContext } from "react";
import Heading from "./Heading";
import Content from "./Content";
import "./Home.css";
import Button from "../UI/Button";
import Footer from "../Footer/Footer";
import { Context } from "../ContextApi/Context";
function Home() {
  const {musicData,merch} = useContext(Context);
  return (
    <div className="home">
      
      <div className="music">
        <h1>Music</h1>
        <div className="content-div">
          {musicData.map((data) => {
            return <Content key={data.id} contentData={data} />;
          })}
        </div>
      </div>
      <div className="music">
        <h1>Merch</h1>
        <div className="content-div">
          {merch.map((data) => {
            return <Content key={data.id} contentData={data} />;
          })}
        </div>
        <Button title="See The Cart" className="see-Cart text-white"></Button>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
