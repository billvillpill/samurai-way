import React from 'react';
import girl from '../../asset/images/girl.png';
import s from './Profile.module.css';

export const Profile = () => {
    return (
        <div className={s.profileWrapper}> {/* 4 */}
            <div className={s.ava}>
                <img src={girl} alt={'avatar of a beautiful drawn girl'}/> {/*автарка*/}
            </div>
            <div className={s.description}>
                Описание профиля
            </div>
        </div>
    );
};
