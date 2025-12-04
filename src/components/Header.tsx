import { NavLink } from "react-router";
import styles from "../styles/Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__inner_wrapper}>
        <nav className={styles.header__nav}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.header__nav_link} ${styles.nav_link__active}`
                : `${styles.header__nav_link}`
            }
            to="/"
          >
            Главная
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.header__nav_link} ${styles.nav_link__active}`
                : `${styles.header__nav_link}`
            }
            to="/todos"
          >
            Задания
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.header__nav_link} ${styles.nav_link__active}`
                : `${styles.header__nav_link}`
            }
            to="/create"
          >
            Создание
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.header__nav_link} ${styles.nav_link__active}`
                : `${styles.header__nav_link}`
            }
            to="/preferences"
          >
            Настройки
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
