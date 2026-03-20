/** @format */

import { SidebarTrigger } from "../ui/sidebar";
import styles from "../../scssstyles/NavBarStyles.module.scss";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const { pathname } = useLocation();
  if (pathname == "/" || pathname == "/404") return null;
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
