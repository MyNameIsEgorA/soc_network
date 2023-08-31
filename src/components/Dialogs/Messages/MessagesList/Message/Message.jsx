import React from "react";
import styles from './Message.module.css'

const Message = (props) => {

    let classname = props.messageCode === 'sent_to' ? 'sent_to' : 'sent_from'

    return (
        <div className={styles.message + ' ' + styles[classname]}>{props.message}</div>
    )
}

export default Message