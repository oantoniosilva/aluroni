import styles from "./Menu.module.scss";
import { Search } from "./search";

import logoImg from "assets/logo.svg";
import { useState } from "react";
import { Filter } from "./Filter";

export function Menu() {
  const [search, setSearch] = useState('');

  return (
    <main>
      <nav className={styles.nav}>
        <img src={logoImg} alt="Logo do Aluroni" />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>
          A casa do código e da massa
        </div>
      </header>
      <section className={styles.menu}>
        <h3 className={styles.menu__title}>Cardápio</h3>
        <Search 
          search={search} 
          setSearch={setSearch} 
        />
        <div className={styles.menu__filters}>
          <Filter />
        </div>
      </section>
    </main>
  )
}
