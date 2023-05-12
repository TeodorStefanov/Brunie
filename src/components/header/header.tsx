import { FC } from "react";
import { Logo } from "../logo";
import { Menu } from "../menu";
import styles from "./index.module.css";
export const Header: FC = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <Menu />
    </div>
  );
};
