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
        <div className={styles.divThree}>
          <img className={styles.imageThree} alt="Remy Sharp" src={image3} />
        </div>
        <div className={styles.divTwo}>
          <img className={styles.imageTwo} alt="Remy Sharp" src={image2} />
        </div>
        <div className={styles.divOne}>
          <img className={styles.imageOne} alt="Remy Sharp" src={image} />
        </div>
      </div>
    </div>
  );
};
