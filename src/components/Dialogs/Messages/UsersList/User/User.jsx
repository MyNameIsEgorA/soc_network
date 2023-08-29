import React from "react";
import { NavLink } from "react-router-dom";
import styles from './User.module.css'

const User = (props) => {

    let path = '/dialogs/' + props.id

    return (
        <div className={styles.friend}>
            <NavLink to={path} className={styles.name}>{props.userName}</NavLink>
        </div>
    )
}

export default User;