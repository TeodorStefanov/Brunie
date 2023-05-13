import styles from "./index.module.css";
interface Props {
  number: number;
  title: string;
  description: string;
}
export const Row = (props: Props) => {
  return (
    <div
      className={`${styles.row} ${
        props.number === 1
          ? styles.row1
          : props.number === 2
          ? styles.row2
          : props.number === 3 
          ? styles.row3
          : styles.row4
      }`}
    >
      <p className={styles.rowNumber}>{props.number}.</p>
      <b>{props.title}</b>
      <br />
      <br />
      {props.description}
    </div>
  );
};
