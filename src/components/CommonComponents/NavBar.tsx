/** @format */


import { SidebarTrigger } from "../ui/sidebar";
import styles from "../../scssstyles/NavBarStyles.module.scss";



const NavBar = () => {
  return (
    <div className={styles.navBarContainer}>
      <div className={styles.navBarInner}>
        <div className={styles.leftSection}>
          {/* mobile menu button */}
          <div className={styles.sidebarTriggerWrapper}>
            <SidebarTrigger />
          </div>
          {/* Left side - Title */}
          <h1 className={styles.navTitle}>Products</h1>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
