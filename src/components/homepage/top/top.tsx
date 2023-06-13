import Button from "@mui/material/Button";
import styles from "./index.module.css";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
export const Top: FC = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <p className={styles.content}>
        We grow your company with sustainable and profitable strategy
      </p>
      <Button
        variant="contained"
        className={styles.button}
        onClick={() => navigate("/login")}
      >
        Contained
      </Button>
    </div>
  );
};
