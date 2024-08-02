import React from 'react';
import { Link } from 'react-router-dom';

const RepoList = ({ repositories }) => {
  return (
    <div className="repo-list">
      {repositories.map((repo) => (
        <div key={repo.id} className="repo-item">
          <h3>
            <Link to={`/repo/${repo.full_name}`}>{repo.name}</Link>
          </h3>
          <p>{repo.description}</p>
          <span>⭐ {repo.stargazers_count}</span>
          <span>🍴 {repo.forks_count}</span>
        </div>
      ))}
    </div>
  );
};

export default RepoList;
