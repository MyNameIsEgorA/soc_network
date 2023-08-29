import React from "react";
import styles from './Navbar.module.css'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <NavLink to="/profile" className={navData => navData.isActive ? styles.active : styles.nav_item} >Profile</NavLink>
            <NavLink to="/dialogs" className={navData => navData.isActive ? styles.active : styles.nav_item}>
                Messages
            </NavLink>
            <a href="/news" className={styles.nav_item}>
                News
            </a>
            <a href="/music" className={styles.nav_item}>
                Music
            </a>
            <a href="/settings" className={styles.nav_item}>
                Settings
            </a>
        </nav>
    )
}

export default Navbar