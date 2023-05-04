import Rightnav from "./Rightnav";
import Wrapper from "./Wrapper";
import Overview from "./Overview";
import Repository from "./Repository";
import { useState } from "react";
const Rightside = () => {
  const [view, setView] = useState(1);
  const [apiData, setApiData] = useState([]);
  function getDataHandler(apiData) {
    const data = apiData;
    setApiData(data);
    console.log(data);
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
