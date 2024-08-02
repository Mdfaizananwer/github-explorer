import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RepoDetail = () => {
  const [repo, setRepo] = useState(null);
  const { repoName } = useParams(); // Use useParams to get route parameters

  useEffect(() => {
    const fetchRepo = async () => {
      try {
        const response = await axios.get(`https://api.github.com/repos/${repoName}`);
        setRepo(response.data);
      } catch (error) {
        console.error('Error fetching repository details:', error);
      }
    };
    fetchRepo();
  }, [repoName]);

  if (!repo) return <p>Loading...</p>;

  return (
    <div className="repo-detail">
      <h1>{repo.name}</h1>
      <p>{repo.description}</p>
      <span>⭐ {repo.stargazers_count}</span>
      <span>🍴 {repo.forks_count}</span>
    </div>
  );
};

export default RepoDetail;
