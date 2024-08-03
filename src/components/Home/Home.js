import React, { useContext } from "react";
import { Context } from "../ContextApi/Context";
import Heading from "../Heading/Heading";
import Footer from "../Footer/Footer";

const Home = () => {
  const { setShowCart } = useContext(Context);
  setShowCart(false);

  
  const tourData = [
    { date: "2024-08-01", place: "New York", location: "Madison Square Garden", ticket: "Available" },
    { date: "2024-08-05", place: "Los Angeles", location: "Staples Center", ticket: "Sold Out" },
    { date: "2024-08-10", place: "Chicago", location: "United Center", ticket: "Available" },
    { date: "2024-08-01", place: "New York", location: "Madison Square Garden", ticket: "Available" },
    { date: "2024-08-05", place: "Los Angeles", location: "Staples Center", ticket: "Sold Out" },
    { date: "2024-08-10", place: "Chicago", location: "United Center", ticket: "Available" },
  ];

  return (
    <div className="main-content d-flex flex-column">
      <Heading />
      <div className="container mt-4 ">
        <h1 className="text-black text-center mt-4">TOUR</h1>
        <table className="table table-bordered table-hover m-5 border-1 border-black">
          <thead className="thead-dark">
            <tr>
              <th>Date</th>
              <th>Place</th>
              <th>Location</th>
              <th>Ticket</th>
            </tr>
          </thead>
          <tbody>
            {tourData.map((tour, index) => (
              <tr key={index}>
                <td>{tour.date}</td>
                <td>{tour.place}</td>
                <td>{tour.location}</td>
                <td>{tour.ticket}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer className="footer"/>
    </div>
  );
};

export default Home;
