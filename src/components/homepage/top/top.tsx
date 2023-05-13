import Button from "@mui/material/Button";
import styles from "./index.module.css";
import { FC } from "react";
export const Top: FC = () => {
  return (
    <div className={styles.container}>
      <p className={styles.content}>
        We grow your company with sustainable and profitable strategy
      </p>
      <Button variant="contained" className={styles.button}>
        Contained
      </Button>
    </div>
  );
};
