import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FilmIndex from './components/filmIndex';

ReactDOM.render(
    <Router>
        <Route exact path="/film" component={FilmIndex} />
    </Router>
    , document.getElementById('app')
)