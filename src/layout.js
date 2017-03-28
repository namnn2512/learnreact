import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import NavBar from './components/navbar'
import Footer from './components/footer'
import FilmRow from './components/filmRow';
import SearchControl from './components/searchControl';
import axios from 'axios';
import { Pagination } from 'react-bootstrap';

var Layout = React.createClass({
    getInitialState() {
        return {
            films: [],
            page: 1,
            pageCount: 0,
            searchText: '',
            filterParams:{
                filmLength: '',//4,
                yearPublished: '',//1983',
                filmType:1,
                country: '',//2
            }
        };
    },

    componentDidMount() {
        this.loadFilmsFromServer()
    },

    loadFilmsFromServer() {
        axios.get('/films', {
            params: {
                page: this.state.page,
                searchText: this.state.searchText,
                filterParams: this.state.filterParams
            }
        }).then((res) => {
            this.state.films = res.data.films;
            this.state.pageCount = res.data.total_count;
            this.setState(this.state);
        }).catch((err) => {
            console.log(err);
        });
    },

    handlePageClick(eventKey) {
        this.state.page = eventKey;
        this.setState(this.state, () => {
            this.loadFilmsFromServer();
            window.scrollTo(0, 0);
        });
    },
    searchHandler(text){
        this.state.searchText = text;
        this.setState(this.state, () => {
            this.loadFilmsFromServer();
        });
    },
    render() {
        var f = [];
        return (
            <div>
                <NavBar />
                <div className="container">
                    <SearchControl onClick={this.searchHandler}/>
                    {this.state.films.map((film, i) => {
                        if (f.length < 5) {
                            f.push(film);
                            if (this.state.films.length == i + 1) {
                                return <FilmRow key={i} lstFilms={f} />
                            }
                        } else {
                            f.push(film);
                            var temp = f;
                            f = [];
                            return <FilmRow key={i} lstFilms={temp} />
                        }
                    })}
                    <div className="text-center">
                        <Pagination
                            prev
                            next
                            first
                            last
                            ellipsis
                            boundaryLinks
                            items={this.state.pageCount}
                            maxButtons={5}
                            activePage={this.state.page}
                            onSelect={this.handlePageClick} />
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
})

ReactDOM.render(<Layout />, document.getElementById('app'))