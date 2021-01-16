import styles from "../styles/component/Navigaton.module.css";

function Navigation(props) {
  return (
    <div className={styles[props.color]}>
      <div className={styles["img-container"]}>
        <img
          src="https://raw.githubusercontent.com/umeshmore45/Blog-Object/48091915bca60f3ec048af96c9062b9db1b93fc1/img/logo%20header.svg"
          alt="logo"
        />
      </div>
      <div className={styles["nav-container"]}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
