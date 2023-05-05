import Rightnav from "./Rightnav";
import Wrapper from "./Wrapper";
import Overview from "./Overview";
import Repository from "./Repository";
import { useState } from "react";
const Rightside = () => {
  const [view, setView] = useState(1);
  const [apiData, setApiData] = useState([]);
  function getDataHandler(apiData) {
    // map the data to only get some projects and not all
    const filteredData = [];
    const Mapped = apiData.map((data, index) => {
      if (
        index === 12 ||
        index === 16 ||
        index === 18 ||
        index === 19 ||
        index === 21 ||
        index === 22 ||
        index === 24 ||
        index === 25
      ) {
        filteredData.push(data);
        console.log("filter", data);
      }
      return data;
    });
    console.log(filteredData);
    setApiData(filteredData);
  }

  function changeviewHandler(view) {
    setView(view);
  }

  return (
    <div>
      <Rightnav
        view={view}
        onGetData={getDataHandler}
        onchangeView={changeviewHandler}
      />
      <Wrapper>
        {view === 1 && <Overview />}
        {view === 2 && <Repository repos={apiData} />}
      </Wrapper>
    </div>
  );
};

export default Rightside;
