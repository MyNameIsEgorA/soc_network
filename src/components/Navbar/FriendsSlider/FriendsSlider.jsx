import React from "react";
import HumanAvatar from "./HumanAvatar/HumanAvatar";
import styles from './FriendsSlider.module.css'

const FriendsSlider = (props) => {

    let slider = []

    for (let i = 0; i < props.images.length; i++) {
        slider.push(<HumanAvatar />)
    }

    return (
        <div className={styles.slider}>
            {slider}
        </div>
    )
}

export default FriendsSlider