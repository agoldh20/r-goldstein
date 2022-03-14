import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.scss';
import Loaded from './components/Loaded/Loaded';

const App = () => {
    
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Loaded/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
