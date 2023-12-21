import React from 'react';
import girl from '../../../asset/images/girl.png';
import s from './ProfileInfo.module.css';


export const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <div className={s.ava}>
                <img src={girl} alt={'avatar of a beautiful drawn girl'}/> {/*автарка*/}
            </div>
            <div className={s.description}>
                Описание профиля
            </div>
        </div>
    );
};