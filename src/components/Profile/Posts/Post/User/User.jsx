import React from 'react'
import styles from './User.module.css'


const User = (props) => {
    return (
        <div className={styles.user_info}>
            <img alt="123" src='https://th.bing.com/th?id=OIP.xY-QLoLc9e-s8TDMGxocvAHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2' className={styles.img} />
            <div className={styles.first_name}>{props.first_name}</div>
            <div className={styles.last_name}>{props.last_name}</div>
        </div>
    )
}

export default User