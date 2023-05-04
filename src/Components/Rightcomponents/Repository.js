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
                name={repo.name}
                description={repo.description}
                date={repo.createdDate}
                language={repo.language}
                url={repo.url}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Repository;
