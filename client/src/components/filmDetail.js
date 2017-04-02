import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './navbar';
import Footer from './footer';
import axios from 'axios';

class FilmDetail extends Component {

    render() {
        return (
            <div>
                <NavBar />
                <div className="container">
                    Film Detail!
                    <Footer />
                </div>
            </div>
        )
    }
};

export default FilmDetail;