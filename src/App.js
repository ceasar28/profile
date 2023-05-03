import "./App.css";
import Leftside from "./Components/Leftcomponent/Leftside";
import Rightside from "./Components/Rightcomponents/Rightside";

function App() {
  return (
    <div className="App">
      <div className="leftside">
        <Leftside />
      </div>
      <div className="rightside">
        <Rightside />
      </div>
    </div>
  );
}

export default App;
