import React from "react";
import styles from './Profile.module.css'
import MyPosts from './Posts/MyPosts'

const Profile = (props) => {
    return (
        <div className={styles.content}>
            <img src='https://img.icons8.com/?size=512&id=Ct7ZqgxkV8vF&format=png' alt='imagination'></img>
            <div>
                <div>Ava + description</div>
                <MyPosts state={props.state} dispatch={props.dispatch} />
            </div>
        </div>
    )
}

export default Profile