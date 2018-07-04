import React from 'react';

import Header from '../header';
import Main from '../main';

import './style.scss';

const CommonView = () => (
    <div className="app">
        <Header/>
        <Main/>
    </div>
);

export default CommonView;

