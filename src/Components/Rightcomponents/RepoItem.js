import "./RepoItem.css";

const RepoItem = (props) => {
  return (
    <div>
      <h4>{props.name}</h4>
      <p>{props.description}</p>
      <p>{props.date}</p>
      <p>{props.language}</p>
      <a href={props.url}>Link</a>
    </div>
  );
};

export default RepoItem;
