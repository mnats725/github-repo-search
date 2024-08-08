import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { RepositoriesPage } from "@components/views/repositories-page";

export const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<RepositoriesPage />} />
    </Routes>
  </Router>
);
