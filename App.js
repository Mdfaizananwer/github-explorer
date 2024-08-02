import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchBar from './Components/SearchBar';
import RepoList from './Components/RepoList';
import RepoDetail from './Components/RepoDetail';
import UserProfile from './Components/UserProfile';
import axios from 'axios';

const App = () => {
  const [repositories, setRepositories] = React.useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(`https://api.github.com/search/repositories?q=${query}`);
      setRepositories(response.data.items);
    } catch (error) {
      console.error('Error searching repositories:', error);
    }
  };

  return (
    <Router>
      <div className="App">
        <SearchBar onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<RepoList repositories={repositories} />} />
          <Route path="/repo/:repoName" element={<RepoDetail />} />
          <Route path="/user/:username" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
