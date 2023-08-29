import React from "react";
import Message from "./Message/Message";
import styles from './MessagesList.module.css';


const MessagesList = (props) => {

    let messagesList = []

    for (let i = 0; i < props.messages.length; i++) {
        messagesList.push(<Message message={props.messages[i].message} id={props.messages[i].id} />)
    }

    return (
        <div className={styles.messages}>
            {messagesList}
        </div>
    )
}

export default MessagesList;