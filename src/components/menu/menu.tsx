import Button from "@mui/material/Button";
import styles from "./index.module.css";
export const Menu = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li>
          <Button variant="contained">Contained</Button>
        </li>
        <li>
          <Button variant="contained">Contained</Button>
        </li>
        <li>
          <Button variant="contained">Contained</Button>
        </li>
        <li>
          <Button variant="contained">Contained</Button>
        </li>
      </ul>
    </div>
  );
};
