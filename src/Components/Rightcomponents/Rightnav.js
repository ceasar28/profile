import "./Rightnav.css";

const Rightnav = () => {
  function FetchMoviesHandler() {
    fetch("https://swapi.dev/api/films/");
  }
  return (
    <div>
      <ul className="nav">
        <li>Overview</li>
        <li>Repository</li>
      </ul>
    </div>
  );
};
export default Rightnav;
