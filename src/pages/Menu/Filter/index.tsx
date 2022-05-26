import filter from "./filter.json";
import styles from "./Filter.module.scss";

// interface Option {
//   id: number;
//   label: string;
// }

type IOption = typeof filter[0];

export function Filter() {
  function selectFilter(option: IOption) {}

  return (
    <div className={styles.filter}>
      {filter.map((option) => (
        <button
          className={styles.filter__filter} 
          key={option.id}
          onClick={() => selectFilter(option)}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}