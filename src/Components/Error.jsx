import styles from "./Error.module.css";
import { Link } from "react-router-dom";
function Error() {
  return (
    <div className={styles.error}>
      <div className={styles.errorContainer}>
        <p>Something went wrong</p>
        <Link to="/">Go Back to Home</Link>
      </div>
    </div>
  );
}

export default Error;
