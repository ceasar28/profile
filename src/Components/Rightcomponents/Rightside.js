import Rightnav from "./Rightnav";
import Wrapper from "./Wrapper";
import Overview from "./Overview";
const Rightside = () => {
  return (
    <div>
      <Rightnav />
      <Wrapper>
        <Overview />
      </Wrapper>
    </div>
  );
};

export default Rightside;
