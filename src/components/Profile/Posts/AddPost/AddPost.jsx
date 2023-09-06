import React, { createRef } from "react";
import styles from './AddPost.module.css'
import { onPostChangeAction, addPostAction } from "../../../../redux/state";

const AddPost = (props) => {

    let inputRef = createRef();

    let updateInputArea = () => {
        props.dispatch(onPostChangeAction(inputRef.current.value))
    }

    let AddPost = () => {
        props.dispatch(addPostAction(inputRef.current.value))
    }

    return (
        <div className={styles.new_post_area}>
            <textarea className={styles.textarea} ref={inputRef} onChange={updateInputArea} value={props.state.currentPostText}></textarea>
            <button className={styles.post_button} onClick={AddPost}>New post</button>
        </div>
    )
}

export default AddPost