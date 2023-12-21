import React from 'react';
import s from './Profile.module.css';
import {Content} from '../content/Content';
import {Posts} from '../posts/Posts';
import {ProfileInfo} from './profileInfo/ProfileInfo';

export const Profile = () => {
    return (
        <div>
            <div className={s.conteiner}>
                <Content />
                <ProfileInfo />
                <Posts />
            </div>
        </div>
    );
};
