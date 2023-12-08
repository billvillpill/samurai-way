import React, {useState} from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {Navbar} from './components/navbar/Navbar';
import {Profile} from './components/profile/Profile';
import {Footer} from './components/footer/Footer';
import {Dialogs} from './components/dialogs/Dialogs';

function App() {
    const [switchPages, setSwitchPages] = useState(true);

    return (
        <div className="background">
            <div className="container">
                <div className="grid-container">
                    <Header />
                    <Navbar
                        setSwitchPages={setSwitchPages}
                    />
                    <div className='app-wrapper-content'>
                        {switchPages ? <Profile /> : <Dialogs />}
                    </div>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}

export default App;
