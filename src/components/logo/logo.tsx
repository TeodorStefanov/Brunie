import React from "react";
import styles from "./index.module.css";
export const Logo = () => {
  return (
    <div className={styles.container}>
      <p className={styles.logoName}>Brunie</p>
      <span className={styles.logoP}>Web development</span>
    </div>
  );
};
