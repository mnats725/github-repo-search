import { RouteObject } from "react-router-dom";

import { RepositoriesPage } from "@components/views/repositories-page";

// Конфигурация маршрутов приложения.
// Этот массив маршрутов был добавлен как возможность для масштабирования проекта,
// позволяя легко добавлять, изменять или удалять маршруты без необходимости
// вносить изменения в основной компонент маршрутизации.
export const routes: RouteObject[] = [
  {
    path: "/",
    element: <RepositoriesPage />,
  },
  // Добавьте другие маршруты здесь
];
