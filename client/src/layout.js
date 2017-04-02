import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import { BrowserRouter as Router, Route, Link, IndexRoute, Redirect, Switch } from 'react-router-dom';
import FilmIndex from './components/filmIndex';
import FilmDetail from './components/filmDetail';
import Home from './components/home';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={Home} />

            <Route path="/film/duyetphim" component={FilmIndex}/>
            <Route path="/film/filmdetail/:filmId" component={FilmDetail}/>
        </div>
    </Router>
    , document.getElementById('app')
)