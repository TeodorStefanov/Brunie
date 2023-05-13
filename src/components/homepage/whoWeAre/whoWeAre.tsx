
import image from "../../../images/image3.jpg";
import image2 from "../../../images/image4.jpg";
import image3 from "../../../images/image5.jpg";
import styles from "./index.module.css";
export const WhoWeAre = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <p>WHO WE ARE</p>
      </div>
      <div className={styles.avatar}>
        <img className={styles.imageThree} alt="Remy Sharp" src={image3} />
        <img className={styles.imageTwo} alt="Remy Sharp" src={image2} />
        <img className={styles.imageOne} alt="Remy Sharp" src={image} />
      </div>
    </div>
  );
};
