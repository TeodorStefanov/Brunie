import { FC } from "react";
import styles from "./index.module.css";
import { Row } from "../row";
export const HowWeWork: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <p>HOW WE WORK</p>
      </div>
      <div className={styles.description}>
        <Row
          number={1}
          title="Agile Software Development"
          description="All of our teams follow Scrum methodology, which has proven to give the desired results while keeping all of the project stakeholders in sync."
        />
        <Row
          number={2}
          title="High Expertise"
          description="The software engineers at Brunie are university professors, thought leaders and talented coders, internationally recognized as experts in their field."
        />
        <Row
          number={3}
          title="95% Retention Rate"
          description="No frequent changes in your devoted team, due to our Brunie culture which results in 95% retention of employees and guarantees partnership success."
        />
        <Row
          number={4}
          title="Long Term Partnerships"
          description="Having partnerships that last 9+ years, we value each of our clients and aim to deliver software solutions that exceed expectations on a daily basis."
        />
      </div>
    </div>
  );
};
