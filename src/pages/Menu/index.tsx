import styles from "./Menu.module.scss";

import logoImg from "assets/logo.svg";

export function Menu() {
  return (
    <main>
      <nav className={styles.menu}>
        <img src={logoImg} alt="Logo do Aluroni" />
      </nav>
    </main>
  )
}