import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchRepositories } from "../../store/repositoriesSlice";

import type { RootState } from "../../store/store";
const [searchTerm, setSearchTerm] = useState("");
const dispatch = useDispatch();
const repositories = useSelector((state: RootState) => state.repositories.repositories);
const status = useSelector((state: RootState) => state.repositories.status);

const handleSearch = () => {
  dispatch(fetchRepositories(searchTerm));
};
export const App = () => {
  return <>123</>;
};
