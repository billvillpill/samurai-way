import React from 'react';
import s from './Navbar.module.css';
export const Navbar = () => {
    return (
        <div className={s.flexWrapper}> {/* 2 menu*/}
            <nav className={s.nav}>
                <ul className={s.menu}>
                    <li className={s.item}>
                        <a href={'#1'}>Profile</a>
                    </li>
                    <li className={s.item}>
                        <a href={'#1'}>Message</a>
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

