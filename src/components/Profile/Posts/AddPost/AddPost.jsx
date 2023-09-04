import React, { createRef } from "react";
import styles from './AddPost.module.css'

const AddPost = (props) => {

    let inputRef = createRef();

    let updateInputArea = () => {
        props.store.postInputUpdate(inputRef.current.value)
    }

    let AddPost = () => {
        props.store.newPost(inputRef.current.value)
    }

    return (
        <div className={styles.new_post_area}>
            <textarea className={styles.textarea} ref={inputRef} onChange={updateInputArea} value={props.store.state.currentPostText}></textarea>
            <button className={styles.post_button} onClick={AddPost}>New post</button>
        </div>
    )
}

export default AddPost