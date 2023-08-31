import React, { createRef } from "react";
import styles from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let inputRef = createRef();

    let alerting = () => {
        console.log(inputRef.current.value)
    }

    return (
        <div className={styles.my_posts}>
            <div className={styles.heading}>My Posts</div>
            <div className={styles.new_post_area}>
                <textarea className={styles.textarea} ref={inputRef}></textarea>
                <button className={styles.post_button} onClick={alerting}>New post</button>
            </div>
            <div className={styles.posts_container}>
                <Post text='Здарова, заебал. Я Санька, но можешь меня звать Александ Григорьевич!' first_name='Александр' last_name="Александров" likes="23" />
                <Post text='Это начало моего босяцкого блога про говно и мух)' first_name='Александр' last_name="Александров" likes="43" />
            </div>
        </div>
    )
}

export default MyPosts