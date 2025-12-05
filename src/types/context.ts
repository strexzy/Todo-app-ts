// ThemeContext types

export type Theme = "light" | "dark";

export interface ThemeContextType {
  theme: Theme;
  switchTheme: () => void;
}

// TodoContext types

export type LoadingStatusType = boolean;

export type ID = string;

export interface Todo {
  id: ID;
  title: string;
  body: string;
  status: boolean;
}

export interface TodoContextType {
  todo: Todo | null;
  todoList: Todo[];
  fetchData: () => Promise<void>;
  postData: (todoTitle: string, todoBody: string) => Promise<void>;
  switchStatus: (
    todoId: ID,
    todoTitle: string,
    todoBody: string,
    todoStatus: boolean,
  ) => Promise<void>;
  fetchSingleTodo: (id: ID) => Promise<void>;
}
