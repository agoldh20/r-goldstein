import React, {FC} from 'react';
import {HeaderProps} from './types'
// import {Link} from 'react-router-dom';
import './Header.scss';

const Header: FC<HeaderProps> = ({setComponent}) => (
    <nav className="navbar navbar-expand-lg navbar-light">
        <div className="navbar-brand" onClick={() => setComponent('home')}>Gold Rehab Services</div>
        <div className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav mr-auto">
                <div className="nav-item nav-link" onClick={() => setComponent('home')}>Home</div>
                <span className="nav-link">|</span>
                <div className="nav-item nav-link" onClick={() => setComponent('about')}>Who we are</div>
                <span className="nav-link">|</span>
                <div className="nav-item nav-link" onClick={() => setComponent('location')}>Where we are</div>
                <span className="nav-link">|</span>
                <div className="nav-item nav-link" onClick={() => setComponent('forms')}>Forms</div>
                <span className="nav-link">|</span>
                <div className="nav-item nav-link" onClick={() => setComponent('contact')}>Contact Us</div>
            </div>
            <span className="navbar-text">
                Make an appointment today!
                <i className="fa fa-phone"/>
                <a href="tel:888-555-1212">&nbsp;(847) 312-2238&nbsp;</a>
            </span>
        </div>
    </nav>
);

export default Header;
