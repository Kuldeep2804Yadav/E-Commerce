import React, { useEffect, useState } from "react";
import Heading from "../Home/Heading";

const Home = () => {
  const [movies,setMovies]=useState([]);
  useEffect(() => {
    fetchMoviesData();
  }, []);
  const fetchMoviesData = async () => {
    try{
      const data = await fetch("https://swapi.dev/api/films");
      const  jsonData= await data.json();
      setMovies(jsonData?.results);
      

    }catch(error){
      console.log(error)
    }
    
  };
  return (
    <div>
      <Heading />
      
      <main className="container mt-4">
        <h1 className="text-dark mb-4 text-center">Tours</h1>
        <table className="table ">
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
      </main>
    </div>
  );
};

export default Home;
