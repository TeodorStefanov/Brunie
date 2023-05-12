import { FC } from "react";
import { PageLayout } from "../../components/pageLayout";
import styles from "./index.module.css";
import { Top } from "../../components/top";
import { HowWeWork } from "../../components/howWeWork";

export const HomePage: FC = () => {
  return (
    <PageLayout>
      <div className={styles.container}>
        <div className={styles.top}>
          <Top />
        </div>
        <HowWeWork />
      </div>
    </PageLayout>
  );
};
