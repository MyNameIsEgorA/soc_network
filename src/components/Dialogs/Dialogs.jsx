import React from "react";
import styles from "./Dialogs.module.css"
import UsersList from "./Messages/UsersList/UsersList";
import MessagesList from "./Messages/MessagesList/MessagesList";

const Dialogs = (props) => {

    console.log(props.CurrentMessageText)

    return (
        <div className={styles.content}>
            <h1 className={styles.heading}>Dialogs</h1>
            <div className={styles.border}></div>
            <div className={styles.dialog}>
                <UsersList people={props.state.people} />
                <MessagesList state={props.state} dispatch={props.dispatch}
                />
            </div>
        </div>
    )
}

export default Dialogs