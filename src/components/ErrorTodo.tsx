import styles from "../styles/ErrorTodo.module.css";

function ErrorTodo() {
  return (
    <div className={styles.error_todo}>
      <h1 className={styles.error_todo__title}>
        Похоже, что такого задания не существует...
      </h1>
    </div>
  );
}

export default ErrorTodo;
