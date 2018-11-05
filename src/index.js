import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import './index.css';
import App from './App';

ReactDOM.render(
    <BrowserRouter>
        <Route path="/" component={App}>
            <App/>
        </Route>
    </BrowserRouter>,
    document.getElementById('root'));


