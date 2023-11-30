import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {Navbar} from './components/navbar/Navbar';
import {Profile} from './components/profile/Profile';
import {Content} from './components/content/Content';
import {Posts} from './components/posts/Posts';
import {Footer} from './components/footer/Footer';

function App() {
    return (
        <div className='background'>
            <div className='container'>
                <div className="grid-container">
                    <Header />
                    <Navbar />
                    <Content />
                    <Profile />
                    <Posts />
                    <Footer />
                </div>
            </div>
        </div>


    );
}

export default App;
