import React from 'react';
import {Provider} from 'react-redux';

import store from '../store';

import CommonView from '../components/common-view';

const App = () => (
    <Provider store={store}>
        <CommonView/>
    </Provider>
);

export default App;
