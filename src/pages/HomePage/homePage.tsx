import { FC } from "react";
import { PageLayout } from "../../components/pageLayout";
import styles from "./index.module.css";
export const HomePage: FC = () => {
  return (
    <PageLayout>
      <div className={styles.container}>hello</div>
    </PageLayout>
  );
};
