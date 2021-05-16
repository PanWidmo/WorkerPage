import React from 'react';
import ReactDOM from 'react-dom';
import {Reset} from 'styled-reset';
import {Provider} from 'react-redux';

import MainPage from './components/MainPage/MainPage';
import store from './tools/store';

ReactDOM.render(
    <Provider store = {store}>
      <Reset />
      <MainPage />
    </Provider>,
    document.getElementById('root')
);