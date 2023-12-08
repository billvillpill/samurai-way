import React from 'react';
import s from './Posts.module.css';
import {Post} from './post/Post';

export const Posts = () => {
    return (
        <div className={s.posts}>
            <h2>My post</h2>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.savePosts}>
                <Post />
            </div>
        </div>
    );
};
