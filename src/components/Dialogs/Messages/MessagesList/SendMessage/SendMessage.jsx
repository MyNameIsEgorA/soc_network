import React, { createRef } from "react";
import styles from './SendMessage.module.css'
import { addNewMessageAction, onMessageChangeAction } from "../../../../../redux/state";

const SendMessage = (props) => {

    let inputRef = createRef()

    const addNewMessage = () => {
        props.dispatch(addNewMessageAction(inputRef.current.value))
        inputRef.current.value = ''
    }

    const onMessageChange = () => {
        props.dispatch(onMessageChangeAction(inputRef.current.value))
        console.log(props.CurrentMessageText)
    }

    return (

        <div className={styles.container}>
            <input
                ref={inputRef} type="text"
                className={styles.textarea}
                placeholder="Your Message:"
                value={props.state.CurrentMessageText}
                onChange={onMessageChange}></input>
            <img onClick={addNewMessage} src="https://th.bing.com/th/id/R.b85740aaeaa6935fc07911e29b72316b?rik=t7hNnff6EfVexg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_85498.png&ehk=AGZ8Y2tu%2fZtndIAiVTEcq0Sf0fx%2bbNIvZthlnyDv8w4%3d&risl=&pid=ImgRaw&r=0" alt="send_messsage" className={styles.send_messsage}></img>
        </div>
    )
}

export default SendMessage