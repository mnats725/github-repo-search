import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { routes } from "../../config/router/routes";

export const App = () => (
  <Router>
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  </Router>
);
