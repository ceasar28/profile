import "./Rightnav.css";
import { useState } from "react";

const Rightnav = (props) => {
  const [movies, setMovies] = useState([]);

  function showBioHandler() {
    return props.onchangeView(1);
  }
  async function FetchMoviesHandler() {
    props.onchangeView(2);
    await fetch("https://swapi.dev/api/films/")
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
        props.onGetData(transformedMovies);

        setMovies(transformedMovies);
      });
  }

  const style =
    props.view === 1
      ? {
          backgroundColor: "rgb(49, 196, 171)",
          color: "white",
          borderRadius: "5px",
        }
      : { padding: "0px 10px 0px 10px", color: "#222", fontSize: "15px" };
  const style2 =
    props.view === 2
      ? {
          backgroundColor: "rgb(49, 196, 171)",
          color: "white",
          borderRadius: "5px",
        }
      : { padding: "0px 10px 0px 10px", color: "#222", fontSize: "15px" };

  return (
    <div>
      <ul className="nav">
        <li onClick={showBioHandler} style={style}>
          Bio
        </li>
        <li onClick={FetchMoviesHandler} style={style2}>
          Repository
        </li>
      </ul>
    </div>
  );
};
export default Rightnav;
