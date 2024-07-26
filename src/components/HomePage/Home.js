import React, { useEffect, useState } from "react";
import Heading from "../Home/Heading";
import Loader from "../UI/Loader";
import "./Home.css";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retry, setRetry] = useState(null);

  const fetchMoviesData = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetch("https://swapi.dev/api/film");
      if (!data.ok) {
        throw new Error("Something Went Wrong....");
      }

      const jsonData = await data.json();

      setMovies(jsonData?.results);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
      setRetry(true)
    }
  };
  const retryHandler = () => {
    setTimeout(() => {
      fetchMoviesData();
    }, 5000);
  };

  const cancelRetryHandler = () => {
    setRetry(false);
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

          <div className="Not-Found">
            {!loading && movies.length === 0 && <div>No Movies Found</div>}
            {!loading && error && <div>{error}</div>}
            {retry && (
              <div>
                <button onClick={retryHandler}>Retrying</button>
                <button onClick={cancelRetryHandler}>Cancel</button>
              </div>
            )}
          </div>

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
