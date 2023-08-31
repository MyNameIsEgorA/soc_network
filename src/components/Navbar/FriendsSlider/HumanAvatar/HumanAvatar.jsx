import React from "react";
import styles from './HumanAvatar.module.css'

const HumanAvatar = (props) => {
    return (
        <div>
            <img src="https://www.pngarts.com/files/11/Avatar-PNG-Transparent-Image.png" className={styles.img}></img>
            <div className={styles.name}>-NAME-</div>
        </div>
    )
}

export default HumanAvatar