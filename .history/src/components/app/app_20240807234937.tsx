import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RepositoryTable } from "@components/ui/repository-table/repository-table";

import { fetchRepositories } from "@features/repositories/repositories-slice";

import type { RootState, AppDispatch } from "@store/store";

export const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const repositories = useSelector((state: RootState) => state.repositories.repositories);
  const status = useSelector((state: RootState) => state.repositories.status);

  useEffect(() => {
    dispatch(fetchRepositories({}));
  }, [dispatch]);

  console.log(repositories, status);

  return (
    <div>
      <RepositoryTable repositories=/>
    </div>
  );
};
