import styles from './sidenav.module.css';
import { BrowserRouter, Router, Link } from 'react-router-dom';

export function Sidenav() {
  return (
    <nav className={styles.sidenav}>
      <BrowserRouter>
        <div className={styles.sideSection} id="1">
          <Link to="/">Home</Link>
          <Link to="/Short">Shorts</Link>
          <Link to="/Subbed">Subscriptions</Link>
        </div>
        <div className={styles.sideSection} id="2">
          <Link to="/Feed/You">You {">"}</Link>
          <Link to="/Feed/History">History</Link>
          <Link to="/PlyLs/WthLtr">Watch Later</Link>
          <Link to="/PlyLs/LkdVds">Liked Videos</Link>
          <Link to="/Feed/Dlds">Downloads</Link>
        </div>
        <div className={styles.sideSection} id="3">
          <h3>Explore</h3>
          <Link to="/">Music</Link>
          <Link to="/Short">Movies</Link>
          <Link to="/Subbed">Gaming</Link>
          <Link to="/Nws">News</Link>
          <Link to="/Spt">Sport</Link>
          <Link to="/Pdcst">Podcast</Link>
        </div>
        <div className={styles.sideSection} id="4">
          <h3>
            More from OurTube
          </h3>
          <Link to="/">Home</Link>
          <Link to="/Short">Shorts</Link>
          <Link to="/Subbed">Subscriptions</Link>
        </div>
        <div className={styles.sideSection} id="5">
          <Link to="/">Home</Link>
          <Link to="/Short">Shorts</Link>
          <Link to="/Subbed">Subscriptions</Link>
        </div>
      </BrowserRouter>
    </nav>
  );
};
