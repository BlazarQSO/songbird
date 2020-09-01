import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import { Main } from './components/main';

import '@babel/polyfill';

const AppWithHot = hot(module)(Main);

const mountNode = document.getElementById('app');
ReactDOM.render(<Main />, mountNode);
