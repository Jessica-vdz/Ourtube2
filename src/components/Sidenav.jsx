import styles from './sidenav.module.css';

export function Sidenav() {
  return (
    <nav className={styles.sidenav}>
      <div className={styles.sideSection} id="1">
        1
      </div>
      <div className={styles.sideSection} id="2">
        2
      </div>
      <div className={styles.sideSection} id="3">
        3
      </div>
      <div className={styles.sideSection} id="4">
        4
      </div>
      <div className={styles.sideSection} id="5">
        5
      </div>
    </nav>
  );
};
