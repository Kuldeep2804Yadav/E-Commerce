import React from "react";
import Heading from "./Heading";
import Content from "./Content";
import "./Home.css";
import Button from "../UI/Button";
import Footer from "../Footer/Footer";

function Home() {
  const Data = [
    {
      id: 1,
      name: "Album 1",
      img: "https://successmusicstudio.com/wp-content/uploads/2021/09/to-dance-grades-treble-clef-628733.jpg",
      price: 12.99,
    },
    {
      id: 2,
      name: "Album 2",
      img: "https://www.shutterstock.com/image-vector/vector-broken-glass-purple-background-260nw-397338193.jpg",
      price: 14.99,
    },
    {
      id: 3,
      name: "Album 3",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ta1KLJ7o_eX9AvEsMTuPCDp1DJWEWqRwGA&s",
      price: 9.99,
    },
    {
      id: 4,
      name: "Album 4",
      img: "https://media.istockphoto.com/id/845844160/vector/poster-of-the-vinyl-record-vector-illustration-on-dark-background.jpg?s=612x612&w=0&k=20&c=OCfJEtjaJONKzTO4OKibyG7451XzzrdYPoEKSuC5L_s=",
      price: 19.99,
    },
  ];

  const merch = [
    {
      id: 1,
      name: "T-Shirt",
      img: "https://yourdesignstore.s3.amazonaws.com/uploads/yds/productImages/full/17155845641871Main-Product-Image-1-1.png",
      price: 19.99,
    },
    {
      id: 2,
      name: "Coffee",
      img: "https://www.nescafe.com/mena/sites/default/files/2023-08/Coffee%20Types%20Banner%20Desktop.jpg",
      price: 19.99,
    },
  ];
  return (
    <div className="home">
      <Heading />
      <div className="music">
        <h1>Music</h1>
        <div className="content-div">
          {Data.map((data) => {
            return <Content contentData={data} />;
          })}
        </div>
      </div>
      <div className="music">
        <h1>Merch</h1>
        <div className="content-div">
          {merch.map((data) => {
            return <Content contentData={data} />;
          })}
        </div>
        <Button title="See The Cart" className="see-Cart"></Button>
      </div>
      <Footer/>
      
    </div>
  );
}

export default Home;
