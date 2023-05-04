import "./RepoItem.css";

const RepoItem = (props) => {
  return (
    <div>
      <h4>{props.title}</h4>
      <p>{props.text}</p>
      <p>{props.date}</p>
    </div>
  );
};

export default RepoItem;
