import "./RepoItem.css";
import { BsLink } from "react-icons/bs";
const RepoItem = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="item">
      <h4>{props.name}</h4>
      <p>{props.description}</p>
      <p>
        {month} {day} {year}
      </p>
      <p>{props.language}</p>
      <a href={props.url}>
        <i className="icon">
          <BsLink />
        </i>
      </a>
    </div>
  );
};

export default RepoItem;
