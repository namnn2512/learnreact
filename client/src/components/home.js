import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './navbar';
import Footer from './footer';

class Home extends Component {

    render() {
        return (
            <div>
                <NavBar />
                <div className="container">
                    Home Page!
                    <Footer />
                </div>
            </div>
        )
    }
};

export default Home;