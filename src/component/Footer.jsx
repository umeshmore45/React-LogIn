import { Facebook, GitHub, LinkedIn, Twitter } from "@material-ui/icons";
import styles from "../styles/component/Footer.module.css";

function Footer(props) {
  console.log(props);
  return (
    <div className={styles[props.color]}>
      <div className={styles["logo"]}>
        <Facebook className={styles["media-logo"]} />
        <GitHub className={styles["media-logo"]} />
        <Twitter className={styles["media-logo"]} />
        <LinkedIn className={styles["media-logo"]} />
      </div>
      <p className={styles["para"]}>Copyright © 2021 All Rights Reserved.</p>
    </div>
  );
}

export default Footer;
