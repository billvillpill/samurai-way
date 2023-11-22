import React from 'react';
import logo from '../asset/images/eagle_black.png';
import mountainLandscape from '../asset/images/mountainLandscape.webp';

export const Header = () => {
    return (
        <header className="header"> {/* 1 логотип*/}
            <div className="logo">
                <img src={logo} alt={'logo'}/>
            </div>
            <div className="mountain">
                <img src={mountainLandscape} alt={'mountain landscape'}/> {/*картинка гор*/}
            </div>
        </header>
    );
};

