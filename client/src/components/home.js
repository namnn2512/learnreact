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
                    <div className="header-info">
                        <h1>BIG HERO 6</h1>
                        <p className="age"><a href="#">All Age</a> Don Hall, Chris Williams</p>
                        <p className="review">Rating	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;  8,5/10</p>
                        <p className="review reviewgo">Genre	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp; Animation, Action, Comedy</p>
                        <p className="review">Release &nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp; 7 November 2014</p>
                        <p className="special">The special bond that develops between plus-sized inflatable robot Baymax, and prodigy Hiro Hamada, who team up with a group of friends to form a band of high-tech heroes.</p>
                        <a className="video" href="#"><i className="video1"></i>WATCH TRAILER</a>
                        <a className="book" href="#"><i className="book1"></i>BOOK TICKET</a>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
};

export default Home;