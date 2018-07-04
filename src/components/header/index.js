import React from 'react';

import './style.scss';

import logo from './logo-uptech.png';

const Header = () => (
    <header className="header">
        <div className="header-logo">
            <img src={logo} className="img-responsive" alt="logo-movie"/>
        </div>
        <h3 className="header-title">React Slider</h3>
    </header>
);

export default Header;
