import React from "react";
import User from "./User/User";
import styles from './UsersList.module.css'

const UsersList = (props) => {

    let people = [
        {
            id: '1', name: 'Sasha',
        },
        {
            id: '2', name: 'Masha',
        },
        {
            id: '3', name: 'Pasha',
        },
        {
            id: '4', name: 'Andruha',
        },
    ]

    let peopleComponents = []

    for (let i = 0; i < people.length; i++) {
        peopleComponents.push(<User id={people[i].id} userName={people[i].name} />)
    }

    return (
        <div className={styles.messages}>
            {peopleComponents}
        </div>
    )
}

export default UsersList