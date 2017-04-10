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
            <Switch>
                <Route path="/phim/duyetphim" component={FilmIndex} />
                <Route path="/phim/:filmSlug([A-Za-z0-9-]+)-:filmId(\d{3,4})" component={FilmDetail} />
                <Route path="/phim/hanh-dong-gia-tuong" render={() => <h1>Hành động giả tưởng</h1>} />
                <Route path="/phim/hoat-hinh" render={() => <h1>Hoạt hình</h1>} />
                <Route path="/phim/kinh-di" render={() => <h1>Kinh dị</h1>}/>
                <Route path="/phim/tam-ly-hai-huoc" render={() => <h1>Tâm lý hài hước</h1>}/>
            </Switch>
        </div>
    </Router>
    , document.getElementById('app')
)
