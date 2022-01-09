import React from 'react';
import {Link} from 'react-router-dom';
import './Header.scss';

const Header = (): JSX.Element => (
    <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to="/">Gold Rehab Services</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav mr-auto">
                <Link className="nav-item nav-link" to="/">Home</Link>
                <span className="nav-link">|</span>
                <Link className="nav-item nav-link" to="/about">Who we are</Link>
                <span className="nav-link">|</span>
                <Link className="nav-item nav-link" to="/location">Where we are</Link>
                <span className="nav-link">|</span>
                <Link className="nav-item nav-link" to="/forms">Forms</Link>
                <span className="nav-link">|</span>
                <Link className="nav-item nav-link" to="/contact">Contact Us</Link>
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
