import React, { useEffect, useState } from "react";
import Heading from "../Home/Heading";
import Loader from "../UI/Loader";
import "./Home.css";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setSetLoading] = useState(false);

  const fetchMoviesData = async () => {
    setSetLoading(true);
    try {
      const data = await fetch("https://swapi.dev/api/films");
      const jsonData = await data.json();

      setMovies(jsonData?.results);
      setSetLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Heading />

      <main className="container ">
        <h1 className="text-dark mb-4 text-center">Movies</h1>
        <button onClick={fetchMoviesData}>Fetch Movies</button>

        <table className="table">
          <thead>
            <tr>
              <th>Release Date</th>
              <th>Title</th>
              <th>Director</th>
              <th>Action</th>
            </tr>
          </thead>
          {loading && (
            <div className="loader-center">
              <Loader />
            </div>
          )}

          {!loading && (
            <tbody>
              {movies.map((data) => (
                <tr key={data.episode_id}>
                  <td>{data.release_date}</td>
                  <td>{data.title}</td>
                  <td>{data.director}</td>
                  <td>
                    <button className="btn btn-primary">BUY TICKETS</button>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </main>
    </div>
  );
};

export default Home;
