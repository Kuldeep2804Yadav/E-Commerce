import React, { useCallback, useEffect, useState } from "react";
import Heading from "../Home/Heading";
import Loader from "../UI/Loader";
import "./Home.css";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retry, setRetry] = useState(false);

  const fetchMoviesData = useCallback(async () => {
    setLoading(true);
    setError(null);
    setRetry(false);
    try {
      const data = await fetch("https://swapi.dev/api/films");
      if (!data.ok) {
        throw new Error("Something went wrong...");
      }
      const jsonData = await data.json();
      setMovies(jsonData.results);
    } catch (error) {
      setError(error.message);
      setRetry(true);
    }
    setLoading(false);
  },[]);

  useEffect(() => {
    fetchMoviesData();
  }, [fetchMoviesData]);

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

      <main className="container">
        <h1 className="text-dark mb-4 text-center">Movies</h1>
        {!loading && !error && movies.length > 0 && (
          <table className="table">
            <thead>
              <tr>
                <th>Release Date</th>
                <th>Title</th>
                <th>Director</th>
                <th>Action</th>
              </tr>
            </thead>
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
          </table>
        )}
        {loading && (
          <div className="loader-center">
            <Loader />
          </div>
        )}

        {!loading && error && (
          <div className="Not-Found">
            <div>{error}</div>
            {retry && (
              <div>
                <button onClick={retryHandler}>Retrying</button>
                <button onClick={cancelRetryHandler}>Cancel</button>
              </div>
            )}
          </div>
        )}

        {!loading && !error && movies.length === 0 && (
          <div className="Not-Found">No Movies Found</div>
        )}
      </main>
    </div>
  );
};

export default Home;
