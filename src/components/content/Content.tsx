import React from 'react';
import s from './Content.module.css';
import mountain from '../../asset/images/mountainLandscape.webp';

export const Content = () => {
    return (
        <div className={s.content}> {/* 3 */}
            <img src={mountain} alt={''}/>
        </div>
    );
};

