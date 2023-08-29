import React from "react";
import styles from "./Dialogs.module.css"
import UsersList from "./Messages/UsersList/UsersList";
import MessagesList from "./Messages/MessagesList/MessagesList";

const Dialogs = (props) => {

    return (
        <div className={styles.content}>
            <h1 className={styles.heading}>Dialogs</h1>
            <div className={styles.dialog}>
                <UsersList />
                <MessagesList />
            </div>
        </div>
    )
}

export default Dialogs