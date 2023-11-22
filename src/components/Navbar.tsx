import React from 'react';

export const Navbar = () => {
    return (
        <div className="flexWrapper"> {/* 2 menu*/}
            <nav className="nav">
                <ul className="menu">
                    <li>
                        <a href={'#1'}>Profile</a>
                    </li>
                    <li>
                        <a href={'#1'}>Message</a>
                    </li>
                    <li>
                        <a href={'#1'}>News</a>
                    </li>
                    <li>
                        <a href={'#1'}>Music</a>
                    </li>
                    <li>
                        <a href={'#1'}>Settings</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

