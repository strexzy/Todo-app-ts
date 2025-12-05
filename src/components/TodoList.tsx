import { useTodo } from "../context/TodoContext";
import { NavLink, Outlet } from "react-router";
import styles from "../styles/TodoList.module.css";

function TodoList() {
  const { todoList } = useTodo();

  return (
    <div className={styles.todo_list}>
      <div className={styles.todo_list__inner_wrapper}>
        <h1 className={styles.todo_list__title}>Список заданий</h1>
        <ul className={styles.todo_list__todos}>
          {todoList.length > 0 ? (
            todoList.map((todo) => (
              <li key={todo.id + todo.title}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.todo_list__todo} ${styles.todo_active}`
                      : `${styles.todo_list__todo}`
                  }
                  to={`/todos/${todo.id}`}
                >
                  {todo.title}
                </NavLink>
              </li>
            ))
          ) : (
            <p className={styles.todo_list__todo__loading}>Загрузка заданий</p>
          )}
        </ul>
        <div className={styles.waves}>
          <div className={styles.wave0}></div>
          <div className={styles.wave1}></div>
          <div className={styles.wave2}></div>
        </div>
      </div>
      {todoList.length > 0 ? (
        <Outlet />
      ) : (
        <div className={styles.todo_list__todo__content__loading}>
          <h1 className={styles.todo_list__todo__content__loading__title}>
            Загрузка контента задания
          </h1>
          <div
            className={styles.todo_list__todo__content__loading__loader}
          ></div>
        </div>
      )}
    </div>
  );
}

export default TodoList;
