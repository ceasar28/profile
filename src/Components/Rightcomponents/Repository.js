import "./Repository.css";
import RepoItem from "./RepoItem";

const Repository = (props) => {
  return (
    <div className="repo">
      <h2>Projects</h2>
      <div className="projects">
        <ul className="repo-list">
          {props.repos.map((repo) => {
            return (
              <RepoItem
                key={repo.id}
                id={repo.id}
                title={repo.title}
                text={repo.openingText}
                date={repo.releaseDate}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Repository;
