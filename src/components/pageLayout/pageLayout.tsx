import { Header } from "../header/header";
import styles from "./index.module.css";
interface Props {
  children: React.ReactNode;
}
export const PageLayout = (props: Props) => {
  return (
    <div className={styles.container}>
      <Header />
      <div>{props.children}</div>
    </div>
  );
};
