import React from 'react';
import ReactDOM from 'react-dom';
import {Reset} from 'styled-reset';

import MainPage from './components/MainPage/MainPage';

ReactDOM.render(
  <>
  <Reset />
  <MainPage />
  </>,
  document.getElementById('root')
);