import React from "react";
import Heading from "../Home/Heading";

const Home = () => {
  const ticketData = [
    { id: 1, Date: "Jul 17", location: "DETROIT, MI,", place: "DTE ENERGY MUSIC THEATRE" },
    { id: 2, Date: "Jul 19", location: "TORONTO,ON", place: "BUDWEISER STAGE" },
    { id: 3, Date: "Jul 27", location: "BRISTOW, VA", place: "JIGGY LUBE LIVE" },
    { id: 4, Date: "Aug 05", location: "PHOENIX, AZ", place: "AK-CHIN PAVILION" },
    { id: 5, Date: "Aug 10", location: "LAS VEGAS, NV", place: "T-MOBILE ARENA" },
    { id: 6, Date: "Aug 17", location: "CONCORD, CA", place: "CONCORD PAVILION" },
  ];

  return (
    <div>
      <Heading />
      <main className="container mt-4">
        <h1 className="text-dark mb-4 text-center" >Tours</h1>
        <table className="table ">
          <thead>
            <tr>
              <th>Date</th>
              <th>Location</th>
              <th>Place</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {ticketData.map((data) => (
              <tr key={data.id}>
                <td>{data.Date}</td>
                <td>{data.location}</td>
                <td>{data.place}</td>
                <td>
                  <button className="btn btn-primary">BUY TICKETS</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Home;
