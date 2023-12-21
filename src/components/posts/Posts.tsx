import React from 'react';
import s from './Posts.module.css';
import {Post} from './post/Post';

export const Posts = () => {
    return (
        <div className={s.posts}>
            <h2>My post</h2>
            <div>
                <div className={s.block}>
                    <textarea className={s.textarea}></textarea>
                    <button className={s.submitTextArea}>Add post</button>
                </div>
            </div>
            <div className={s.postsBlock}>
                <Post />
            </div>
        </div>
    );
};
