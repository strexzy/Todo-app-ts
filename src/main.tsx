import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import { TodoProvider } from "./context/TodoContext.tsx";
import Error from "./pages/Error.tsx";
import Home from "./pages/Home.tsx";
import ErrorTodo from "./components/ErrorTodo.tsx";
import Todos from "./pages/Todos.tsx";
import Todo from "./components/DisplayTodo.tsx";
import Create from "./pages/Create.tsx";
import Preferences from "./pages/Preferences.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Error />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/todos",
    element: <Todos />,
    children: [
      {
        path: "/todos/:id",
        element: <Todo />,
        errorElement: <ErrorTodo />,
      },
    ],
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/preferences",
    element: <Preferences />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <TodoProvider>
        <RouterProvider router={router} />
      </TodoProvider>
    </ThemeProvider>
  </StrictMode>,
);
