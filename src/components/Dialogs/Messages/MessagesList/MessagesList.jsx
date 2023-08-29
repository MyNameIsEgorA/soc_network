import React from "react";
import Message from "./Message/Message";
import styles from './MessagesList.module.css';


const MessagesList = () => {

    let messagesList = []

    let messages = [
        { id: "1", message: "Ayooo" },
        { id: "2", message: "Wassup Man!" },
        { id: "3", message: "Maincraft is my life!!!" },
        { id: "4", message: "No, man, red panties isn't gay" }
    ]

    for (let i = 0; i < messages.length; i++) {
        messagesList.push(<Message message={messages[i].message} id={messages[i].id} />)
    }

    return (
        <div className={styles.messages}>
            {messagesList}
        </div>
    )
}

export default MessagesList;