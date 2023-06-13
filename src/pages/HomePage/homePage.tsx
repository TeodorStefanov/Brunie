import { FC } from "react";
import { PageLayout } from "../../components/pageLayout";
import styles from "./index.module.css";
import { Top } from "../../components/homepage/top";
import { HowWeWork } from "../../components/homepage/howWeWork";
import { WhoWeAre } from "../../components/homepage/whoWeAre";

export const HomePage: FC = () => {
  return (
    <PageLayout>
      <div className={styles.container}>
        <div className={styles.top}>
          <Top />
        </div>
        <HowWeWork />
        <WhoWeAre />
      </div>
    </PageLayout>
  );
};
