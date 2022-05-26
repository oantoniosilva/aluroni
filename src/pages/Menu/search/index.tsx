import React from "react";
import styles from "./Search.module.scss";

interface SearchProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

export function Search({ search, setSearch}: SearchProps) {
  return (
    <div className={styles.search}>
      Search
    </div>
  )
}