import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/global.scss';
import 'animate.css/animate.min.css';

const rootElement = document.getElementById('root');

const Root = () => (
    <Router>
        <App />
    </Router>
);

ReactDOM.render(
    <Root />,
    rootElement
);