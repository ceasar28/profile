import "./Rightnav.css";
import { useState } from "react";

const Rightnav = (props) => {
  const [movies, setMovies] = useState([]);

  // to open my resume from google drive
  function showResumeHandler() {
    return window.open(
      "https://drive.google.com/file/d/1yuyFc91s79-YH4WLiGBRtUVWG59zxUF-/view?usp=share_link"
    );
  }
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
            createdDate: new Date(repo.created_at),
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
  const style3 = {
    backgroundColor: "#ff6dcd",
    color: "white",
    borderRadius: "5px",
  };
  return (
    <div>
      <ul className="nav">
        <li onClick={showBioHandler} style={style}>
          Bio
        </li>
        <li onClick={FetchMoviesHandler} style={style2}>
          Projects
        </li>
        <li onClick={showResumeHandler} style={style3}>
          Resume
        </li>
      </ul>
    </div>
  );
};
export default Rightnav;
