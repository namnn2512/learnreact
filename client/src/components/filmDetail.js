import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './navbar';
import Footer from './footer';
import ajax from '../helpers/ajax';
import { Link } from 'react-router-dom';

class FilmDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filmDetail: {
                FilmTypeDesc: '',
                YearPublished: '',
                FilmLengthDesc: '',
                Country: '',
                FilmName: '',
                ImgUrl: '',
                TrailerUrl: '',
                relateFilms: [],
                FilmTypeUrl: ''
            },

            queryParams: this.props.match.params
        };
    }

    componentDidMount() {
        this.getFilmDetail();
    }

    getFilmDetail() {
        ajax.get('/films/GetFilmDetail', {
            params: this.state.queryParams
        }).then((res) => {
            this.state.filmDetail = res.data;
            this.setState(this.state);
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        const data = this.state.filmDetail;
        const date = new Date(this.state.filmDetail.TimeLength * 1000);
        const dateStr = date.getHours() + ' giờ ' + date.getMinutes() + ' phút';
        return (
            <div>
                <NavBar />
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-9">
                            <div className="detail-container">
                                <div className="left-detail">
                                    <img width="585" height="480" className="img-responsive" src={data.ImgUrl} />
                                </div>
                                <div className="right-detail">
                                    <ul className="movie-detail">
                                        <li>
                                            <i className="fa fa-film" />
                                            Thể loại: <Link to={data.FilmTypeUrl}><span>{data.FilmTypeDesc}</span></Link>
                                        </li>
                                        <li>
                                            <i className="fa fa-clock-o" />
                                            Thời lượng: <span>{dateStr}</span>
                                        </li>
                                        <li>
                                            <i className="fa fa-globe" />
                                            Quốc gia: <span>{data.Country}</span>
                                        </li>
                                        <li>
                                            <i className="fa fa-calendar" />
                                            Năm phát hành: <span>{data.YearPublished}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row">
                                <div className="movie-trailer col-xs-12">
                                    <div className="text-trailer">
                                        <i className="fa fa-file-video-o"></i> Trailer:
                                </div>
                                    <iframe width="100%" height="350" src={data.TrailerUrl} frameBorder="0" allowFullScreen=""></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-3">
                            <div className="suggest-list">
                                <h3 className="text-center">Các Phim Liên Quan</h3>
                                <ul>
                                    <li>
                                        <a href="#"><img className="img-responsive" src="http://phim.cafephim.vn/wp-content/uploads/2017/04/Stratton-2017-585x480.jpg" alt="" /></a>
                                        <p>lorem movie review</p>
                                    </li>
                                    <li>
                                        <a href="#"><img className="img-responsive" src="http://phim.cafephim.vn/wp-content/uploads/2017/04/Stratton-2017-585x480.jpg" alt="" /></a>
                                        <p>lorem movie review</p>
                                    </li>
                                    <li>
                                        <a href="#"><img className="img-responsive" src="http://phim.cafephim.vn/wp-content/uploads/2017/04/Stratton-2017-585x480.jpg" alt="" /></a>
                                        <p>lorem movie review</p>
                                    </li>
                                    <li>
                                        <a href="#"><img className="img-responsive" src="http://phim.cafephim.vn/wp-content/uploads/2017/04/Stratton-2017-585x480.jpg" alt="" /></a>
                                        <p>lorem movie review</p>
                                    </li>
                                    <li>
                                        <a href="#"><img className="img-responsive" src="http://phim.cafephim.vn/wp-content/uploads/2017/04/Stratton-2017-585x480.jpg" alt="" /></a>
                                        <p>lorem movie review</p>
                                    </li>
                                    <li>
                                        <a href="#"><img className="img-responsive" src="http://phim.cafephim.vn/wp-content/uploads/2017/04/Stratton-2017-585x480.jpg" alt="" /></a>
                                        <p>lorem movie review</p>
                                    </li>
                                    <div className="clearfix"></div>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
};

export default FilmDetail;