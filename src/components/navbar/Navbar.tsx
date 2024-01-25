import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

export const Navbar = () => {
    return (
        <div className={s.flexWrapper}> {/* 2 menu*/}
            <nav className={s.nav}>
                <ul className={s.menu}>
                    <li className={s.item}>
                        <NavLink to={'/profile'} activeClassName={s.activeLink}>Profile</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to={'/dialogs'} activeClassName={s.activeLink}>Message</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to={'/news'} activeClassName={s.activeLink}>News</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to={'/music'} activeClassName={s.activeLink}>Music</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to={'/settings'} activeClassName={s.activeLink}>Settings</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

