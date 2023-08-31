import React from "react";
import Message from "./Message/Message";
import styles from './MessagesList.module.css';
import SendMessage from "./SendMessage/SendMessage"


const MessagesList = (props) => {

    let messagesList = []

    for (let i = 0; i < props.messages.length; i++) {
        messagesList.push(<Message message={props.messages[i].message} id={props.messages[i].id} messageCode={props.messages[i].messageCode} />)
    }

    return (
        <div className={styles.messages}>
            {messagesList}
            <SendMessage sendMessageTo={props.sendMessageTo} />
        </div>
    )
}

export default MessagesList;