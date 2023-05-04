import "./Rightnav.css";
import { useState } from "react";

const Rightnav = () => {
  const [movies, setMovies] = useState([]);
  function FetchMoviesHandler() {
    fetch("https://swapi.dev/api/films/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedMovies = data.results.map((moviesData) => {
          return {
            id: moviesData.episode_id,
            title: moviesData.title,
            openingText: moviesData.opening_crawl,
            releaseDate: moviesData.release_date,
          };
        });
        console.log(transformedMovies);
        setMovies(transformedMovies);
      });
  }
  return (
    <div>
      <ul className="nav">
        <li>Overview</li>
        <li onClick={FetchMoviesHandler}>Repository</li>
      </ul>
    </div>
  );
};
export default Rightnav;
