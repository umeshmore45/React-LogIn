import styles from "../styles/pages/NotFound.module.css";

function NotFound(props) {
  return (
    <div className={styles["not-found"]}>
      <button className={styles["btn"]}>Go Back</button>
    </div>
  );
}

export default NotFound;
