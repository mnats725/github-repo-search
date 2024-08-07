import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchRepositories } from "../../store/repositoriesSlice";

import type { RootState, AppDispatch } from "../../store/store";


export const App = () => {
  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search repositories"
      />
      <button onClick={handleSearch}>Search</button>

      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Failed to load repositories.</p>}
      {status === "idle" && (
        <ul>
          {repositories.map((repo) => (
            <li key={repo.id}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <p>Language: {repo.language}</p>
              <p>Forks: {repo.forks_count}</p>
              <p>Stars: {repo.stargazers_count}</p>
              <p>Last updated: {repo.updated_at}</p>
              <p>License: {repo.license.name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
