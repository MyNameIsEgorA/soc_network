import React from "react";
import Message from "./Message/Message";
import styles from './MessagesList.module.css';
import SendMessage from "./SendMessage/SendMessage"


const MessagesList = (props) => {

    console.log(props.CurrentMessageText)

    let messagesList = []

    let dataMessagesList = props.store.state.messages

    for (let i = 0; i < dataMessagesList.length; i++) {
        messagesList.push(<Message message={dataMessagesList[i].message} id={dataMessagesList[i].id}
            messageCode={dataMessagesList[i].messageCode} />)
    }

    return (
        <div className={styles.messages}>
            {messagesList}
            <SendMessage store={props.store} />
        </div>
    )
}

export default MessagesList;