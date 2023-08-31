import React, { createRef } from "react";
import styles from './SendMessage.module.css'

const SendMessage = (props) => {

    let inputRef = createRef()

    const alerting = () => {
        props.sendMessageTo(inputRef.current.value)
    }

    return (

        <div className={styles.container}>
            <input ref={inputRef} type="text" className={styles.textarea} placeholder="Your Message:"></input>
            <img onClick={alerting} src="https://th.bing.com/th/id/R.b85740aaeaa6935fc07911e29b72316b?rik=t7hNnff6EfVexg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_85498.png&ehk=AGZ8Y2tu%2fZtndIAiVTEcq0Sf0fx%2bbNIvZthlnyDv8w4%3d&risl=&pid=ImgRaw&r=0" alt="send_messsage" className={styles.send_messsage}></img>
        </div>
    )
}

export default SendMessage