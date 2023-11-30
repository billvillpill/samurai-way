import React from 'react';
import logo from '../../asset/images/eagle_black.png';
import bikerMountain from '../../asset/images/biker2.png';
import s from './Header.module.css';

export const Header = () => {
    return (
        <header className={s.header}> {/* 1 логотип*/}
            <div className={s.logo}>
                <img src={logo} alt={'logo'}/>
            </div>
            <div className={s.title}>
                <h1>Egle Rider</h1>
            </div>
            <div className={s.mountain}>
                <img src={bikerMountain} alt={'biker with mountains in the background'}/> {/*картинка гор*/}
            </div>
        </header>
    );
};

