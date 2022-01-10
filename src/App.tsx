import React from 'react';
import {HashRouter, Route, Routes} from 'react-router-dom';
import './App.scss';
import Home from './components/Home/Home';
import Location from './components/Location/Location';
import Header from './components/Header/Header';
import About from './components/About/About';
import Forms from './components/Forms/Forms';
import Contact from './components/Contact/Contact';

const App = () => {

    return (
        <div className="App">
            <HashRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/location" element={<Location/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/forms" element={<Forms/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;
