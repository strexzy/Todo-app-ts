import { useEffect, useState } from "react";
import { useTodo } from "../context/TodoContext";
import { useParams } from "react-router";
import type { ID, LoadingStatusType } from "../types/context";
import styles from "../styles/Todo.module.css";

function DisplayTodo() {
  const [isLoading, setIsLoading] = useState<LoadingStatusType>(false);
  const { todo, fetchSingleTodo, switchStatus } = useTodo();
  let { id } = useParams<ID>();

  const handleSwitch = async () => {
    setIsLoading(true);
    try {
      if (!todo) throw new Error("Todo not found");
      await switchStatus(todo.id, todo.title, todo.body, todo.status);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!id) return;
    fetchSingleTodo(id);
  }, [id, isLoading]);

  if (!todo) {
    return <div className={styles.todo}>Загрузка...</div>;
  }

  return (
    <div className={styles.todo}>
      <div className={styles.todo__inner_wrapper}>
        <h3 className={styles.todo__title}>{todo.title}</h3>
        <p className={styles.todo__body}>{todo.body}</p>
        <div className={styles.todo__status}>
          <div className={styles.todo__status__wrapper__done}>
            <p
              className={
                todo.status
                  ? `${styles.todo__status__done} ${styles.todo__status__active}`
                  : `${styles.todo__status__done}`
              }
            >
              Сделано
            </p>
          </div>
          <div className={styles.todo__status__wrapper__span}>
            <span className={styles.todo__status__span}></span>
          </div>
          <div className={styles.todo__status__wrapper__undone}>
            <p
              className={
                todo.status
                  ? `${styles.todo__status__undone}`
                  : `${styles.todo__status__undone} ${styles.todo__status__active}`
              }
            >
              Не сделано
            </p>
          </div>
        </div>
        <button
          disabled={isLoading ? true : false}
          onClick={handleSwitch}
          className="todo__switch"
        >
          Изменить статус
        </button>
      </div>
    </div>
  );
}

export default DisplayTodo;
