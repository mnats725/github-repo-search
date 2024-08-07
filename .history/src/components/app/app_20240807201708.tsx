import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchRepositories } from "../../store/repositoriesSlice";

import type { RootState, AppDispatch } from "../../store/store";

export const App = () => {
  const dispatch = useDispatch();
  const repositories = useSelector((state: RootState) => state.repositories.repositories);
  const status = useSelector((state: RootState) => state.repositories.status);

  useEffect(() => {
    dispatch(fetchRepositories());
  }, [dispatch]);

  return (
    <div>
      <h1>Repository List</h1>

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
