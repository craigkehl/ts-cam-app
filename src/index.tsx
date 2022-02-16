import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import configurePresetStore from './store/presets-store';

configurePresetStore();

ReactDOM.render(
  <BrowserRouter>
    <App className='app' />
  </BrowserRouter>,
  document.getElementById('root')
);
