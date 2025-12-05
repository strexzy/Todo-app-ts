import styles from "../styles/Theme.module.css";
import { useTheme } from "../context/ThemeContext.js";

function Theme() {
  const { switchTheme } = useTheme();

  const handleClick = (): void => {
    switchTheme();
  };

  return (
    <div className={styles.theme}>
      <div className={styles.theme__inner_wrapper}>
        <h1 className={styles.theme__title}>Сменить тему</h1>
        <button onClick={handleClick} className={styles.theme__button}>
          Сменить тему
        </button>
      </div>
    </div>
  );
}

export default Theme;
