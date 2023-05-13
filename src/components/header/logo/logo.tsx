import styles from "./index.module.css";
import image from "../../../images/image2.jpg";
import { FC } from "react";
export const Logo: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img className={styles.logoImage} src={image} alt="logo" />
        <p className={styles.logoName}>runie</p>
      </div>
      <span className={styles.logoP}>Web development</span>
    </div>
  );
};
