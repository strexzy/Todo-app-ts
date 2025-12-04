import LogoReact from "../assets/react.svg";
import LogoVite from "../assets/vite.svg";
import LogoRouter from "../assets/router.svg";
import styles from "../styles/Greeting.module.css";

function Greeting() {
  return (
    <div className={styles.greeting}>
      <div className={styles.greeting__inner_wrapper}>
        <h1 className={styles.greeting__title}>Добро пожаловать в TodoApp</h1>
        <h2 className={styles.greeting__subtitle}>
          React приложение, созданное с использованием следующих технологий:
        </h2>
        <ul className={styles.greeting__stack}>
          <li className={styles.greeting__stack__element}>
            <img
              src={LogoReact}
              alt="логотип react"
              className={styles.greeting__stack__element__icon}
            />
            <a
              href="https://react.dev/"
              className={styles.greeting__stack__element__name}
            >
              React
            </a>
          </li>
          <li className={styles.greeting__stack__element}>
            <img
              src={LogoVite}
              alt="логотип vite"
              className={styles.greeting__stack__element__icon}
            />
            <a
              href="https://vite.dev/"
              className={styles.greeting__stack__element__name}
            >
              Vite
            </a>
          </li>
          <li className={styles.greeting__stack__element}>
            <img
              src={LogoRouter}
              alt="логотип router"
              className={styles.greeting__stack__element__icon}
            />
            <a
              href="https://reactrouter.com/"
              className={styles.greeting__stack__element__name}
            >
              Router
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Greeting;
