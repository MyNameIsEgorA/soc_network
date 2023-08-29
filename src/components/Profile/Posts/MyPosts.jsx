import React from "react";
import styles from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={styles.my_posts}>
            <div className={styles.header}>My Posts</div>
            <div className={styles.post_button}>New post</div>
            <div className={styles.posts_container}>
                <Post text='Здарова, заебал. Я Санька, но можешь меня звать Александ Григорьевич!' first_name='Александр' last_name="Александров" likes="23" />
                <Post text='Это начало моего босяцкого блога про говно и мух)' first_name='Александр' last_name="Александров" likes="43" />
            </div>
        </div>
    )
}

export default MyPosts