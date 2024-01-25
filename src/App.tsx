import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {Navbar} from './components/navbar/Navbar';
import {Profile} from './components/profile/Profile';
import {Footer} from './components/footer/Footer';
import {Dialogs} from './components/dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from './components/news/News';
import {Music} from './components/music/Music';
import {Settings} from './components/settings/Settings';

function App() {

    return (
        <BrowserRouter>
            <div className="background">
                <div className="container">
                    <div className="grid-container">
                        <Header/>
                        <Navbar/>
                        <div className="app-wrapper-content">
                            <Route path={'/profile'} component={Profile}/>
                            <Route path={'/dialogs'} component={Dialogs}/>
                            <Route path={'/news'} component={News}/>
                            <Route path={'/music'} component={Music}/>
                            <Route path={'/settings'} component={Settings}/>
                        </div>
                        <Footer/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
