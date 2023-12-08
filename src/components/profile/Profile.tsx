import React from 'react';
import girl from '../../asset/images/girl.png';
import s from './Profile.module.css';
import {Content} from '../content/Content';
import {Posts} from '../posts/Posts';

export const Profile = () => {
    return (
        <div>
            <div className={s.conteiner}>
                <Content />
                <div className={s.profile}>
                    <div className={s.ava}>
                        <img src={girl} alt={'avatar of a beautiful drawn girl'}/> {/*автарка*/}
                    </div>
                    <div className={s.description}>
                        Описание профиля
                    </div>
                </div>
                <Posts />
            </div>
        </div>
    );
};
