import React from 'react';
import s from './Navbar.module.css';

type NavbarPropsType = {
    setSwitchPages: (state: boolean) => void
}
export const Navbar = (props: NavbarPropsType) => {
    const onClikSwitchOnProfile = () => {
        props.setSwitchPages(true)
    }
    const onClikSwitchOnMessage = () => {
        props.setSwitchPages(false)
    }
    return (
        <div className={s.flexWrapper}> {/* 2 menu*/}
            <nav className={s.nav}>
                <ul className={s.menu}>
                    <li className={s.item}>
                        <a href={'#1'} onClick={onClikSwitchOnProfile}>Profile</a>
                    </li>
                    <li className={s.item}>
                        <a href={'#1'} onClick={onClikSwitchOnMessage}>Message</a>
                    </li>
                    <li className={s.item}>
                        <a href={'#1'}>News</a>
                    </li>
                    <li className={s.item}>
                        <a href={'#1'}>Music</a>
                    </li>
                    <li className={s.item}>
                        <a href={'#1'}>Settings</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

