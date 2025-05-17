import { FaCheck, FaCheckCircle } from "react-icons/fa";
import styles from "./Congratulations.module.css";
import { Link } from "react-router-dom";
function Congratulations() {
  return (
    <div className={`${styles.congratulationArea} text-center mt-5`}>
      <div className={styles.container}>
        <div className={styles.congratulationWrapper}>
          <div
            className={`${styles.congratulationContents} ${styles.centerText}`}
          >
            <div className={styles.congratulationContentsIcon}>
              <FaCheckCircle />
            </div>
            <h4 className={styles.congratulationContentsTitle}>
              Congratulations!
            </h4>
            <p className={styles.congratulationContentsPara}>
              You have successfully booked a Ticket.
            </p>
            <div className={`${styles.btnWrapper} mt-4`}>
              <Link
                to="/events"
                className={`${styles.cmnBtn} ${styles.btnBg1}`}
              >
                Check another events
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Congratulations;
