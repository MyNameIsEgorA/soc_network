import React from 'react';
import styles from './MyPosts.module.css'
import Post from "./Post/Post";
import AddPost from './AddPost/AddPost';

const MyPosts = (props) => {

    let postsList = []

    let dataPostsList = props.store.state.posts

    for (let i = 0; i < dataPostsList.length; i++) {
        postsList.push(<Post text={dataPostsList[i].text} first_name={dataPostsList[i].first_name} last_name={dataPostsList[i].last_name} likes={dataPostsList[i].likes} />)
    }

    return (
        <div className={styles.my_posts}>
            <div className={styles.heading}>My Posts</div>
            <AddPost store={props.store} />
            <div className={styles.posts_container}>
                {postsList}
            </div>
        </div>
    )
}

export default MyPosts