import "./App.css";
import Leftside from "./Components/Leftcomponent/Leftside";
import Rightside from "./Components/Rightcomponents/Rightside";
import Footer from "./Components/footer";

function App() {
  return (
    <div className="main">
      <div className="App">
        <div className="leftside">
          <Leftside />
        </div>
        <div className="rightside">
          <Rightside />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
