import React from "react";
import User from "./User/User";
import styles from './UsersList.module.css'

const UsersList = (props) => {

    let peopleComponents = []

    for (let i = 0; i < props.people.length; i++) {
        peopleComponents.push(<User id={props.people[i].id} userName={props.people[i].name} />)
    }

    return (
        <div className={styles.messages}>
            {peopleComponents}
        </div>
    )
}

export default UsersList