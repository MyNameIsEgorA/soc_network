import React from "react";
import styles from './Post.module.css';
import User from "./User/User";

const Post = (props) => {
    return (
        <div className={styles.item}>
            <User first_name={props.first_name} last_name={props.last_name} />
            <div className={styles.text}>{props.text}</div>
            <div className={styles.like_counter}>likes: {props.likes}</div>
        </div>
    )
}

export default Post