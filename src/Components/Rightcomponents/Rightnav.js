import "./Rightnav.css";
import { useState } from "react";

const Rightnav = (props) => {
  const [movies, setMovies] = useState([]);

  function showBioHandler() {
    return props.onchangeView(1);
  }
  async function FetchMoviesHandler() {
    props.onchangeView(2);
    // https://swapi.dev/api/films/

    await fetch("https://api.github.com/users/ceasar28/repos")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const transformedData = data.map((repo) => {
          return {
            id: repo.id,
            name: repo.name,
            description: repo.description,
            createdDate: repo.created_at,
            language: repo.language,
            url: repo.url,
          };
        });
        props.onGetData(transformedData);

        setMovies(transformedData);
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
