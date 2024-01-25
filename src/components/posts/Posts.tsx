import React from 'react';
import s from './Posts.module.css';
import {Post} from './post/Post';

export const Posts = () => {
    const postsData = [
        {id: 1, likesCount: 1, message: 'Hi, how are you?'},
        {id: 2, likesCount: 21, message: 'It\'s my first post'},
        {id: 3, likesCount: 2, message: 'Yo!'},
        {id: 4, likesCount: 12, message: 'Hello friend!'},
        {id: 5, likesCount: 25, message: 'Thank you!'},
        {id: 6, likesCount: 11, message: 'What time is it now?'},
    ];
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
                {postsData.map(el => <Post key={el.id} likesCount={el.likesCount} message={el.message} />)}
            </div>
        </div>
    );
};
