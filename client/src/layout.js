import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import { BrowserRouter as Router, Route, Link, IndexRoute, Redirect, Switch } from 'react-router-dom';
import FilmIndex from './components/filmIndex';
import FilmDetail from './components/filmDetail';
import Home from './components/home';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-material-design/dist/css/bootstrap-material-design.css";
import "bootstrap-material-design/dist/css/ripples.css";
import "arrive/minified/arrive.min.js";
import "bootstrap/dist/js/bootstrap.js"
import "bootstrap-material-design/dist/js/material.js";
import 'bootstrap-material-design/dist/js/ripples.js';
$.material.init();


ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={Home} />

            <Route path="/phim/duyetphim" component={FilmIndex} />
            <Route path="/phim/filmdetail/:filmId" component={FilmDetail} />
        </div>
    </Router>
    , document.getElementById('app')
)
