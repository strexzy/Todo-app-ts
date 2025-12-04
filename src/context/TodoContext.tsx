import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import type { TodoContextType, Todo, ID } from "../types/context";

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const url = "https://68da1f2623ebc87faa2f03cb.mockapi.io/todos";

  const fetchData = async (): Promise<void> => {
    try {
      const response = await axios.get<Todo[]>(url);
      setTodoList(response.data);
    } catch (error) {
      alert(error);
    }
  };

  const postData = async (
    todoTitle: string,
    todoBody: string,
  ): Promise<void> => {
    try {
      await axios.post(url, {
        title: todoTitle,
        body: todoBody,
        status: false,
      });
      await fetchData();
    } catch (error) {
      alert(error);
    }
  };

  const switchStatus = async (
    todoId: ID,
    todoTitle: string,
    todoBody: string,
    todoStatus: boolean,
  ): Promise<void> => {
    try {
      await axios.put(url + `/${todoId}`, {
        id: todoId,
        title: todoTitle,
        body: todoBody,
        status: !todoStatus,
      });
      await fetchData();
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <TodoContext.Provider
      value={{ todoList, fetchData, postData, switchStatus }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = (): TodoContextType => {
  const ctx = useContext(TodoContext);
  if (!ctx) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return ctx;
};

export default TodoContext;
