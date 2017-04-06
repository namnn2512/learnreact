import React, { Component } from 'react';
import ajax from '../helpers/ajax';

class FilterBar extends Component {
    constructor() {
        super();
        this.state = {
            filmLength: [],
            filmTypes: [],
            yearPublished: [],
            countries: []
        };
    }
    componentDidMount() {
        this.loadFilterData();
    }
    loadFilterData() {
        ajax.get('/films/GetFilterDropdownData').then((res) => {
            var oldState = this.state;
            oldState.filmLength = res.data.filmLength;
            oldState.filmTypes = res.data.filmTypes;
            oldState.yearPublished = res.data.yearPublished;
            oldState.countries = res.data.countries;
            this.setState(oldState);
        }).catch((err) => {
            console.log(err);
        });
    }
    filter() {
        var data = {
            filmLength: '',
            yearPublished: '',
            filmType: '',
            country: '',
        };

        data.filmLength = this.refs.drlFilmLength.value;
        data.yearPublished = this.refs.drlYearPublished.value;
        data.filmType = this.refs.drlFilmType.value;
        data.country = this.refs.drlCountry.value;
        this.props.onClick(data);
    }
    render() {
        return (
            <div className="row">
                <div className="col-xs-12 col-md-22percent">
                    <div className="form-group">
                        <label htmlFor="drlFilmType" className="control-label">Thể Loại</label>
                        <select id="drlFilmType" placeholder="select" ref="drlFilmType" className="form-control">
                            <option value="">Chọn thể loại</option>
                            {this.state.filmTypes.map((data, i) => {
                                return <option key={i} value={data.id}>{data.FilmTypeDesc}</option>
                            })}
                        </select>
                    </div>
                </div>
                <div className="col-xs-12 col-md-22percent">
                    <div className="form-group">
                        <label htmlFor="drlYearPublished" className="control-label">Năm Phát Hành</label>
                        <select id="drlYearPublished" placeholder="select" ref="drlYearPublished" className="form-control">
                            <option value="">Chọn năm phát hành</option>
                            {this.state.yearPublished.map((data, i) => {
                                return <option key={i} value={data.YearPublished}>{data.YearPublished}</option>
                            })}
                        </select>
                    </div>
                </div>
                <div className="col-xs-12 col-md-22percent">
                    <div className="form-group">
                        <label htmlFor="drlFilmLength" className="control-label">Thời Lượng</label>
                        <select id="drlFilmLength" placeholder="select" ref="drlFilmLength" className="form-control">
                            <option value="">Chọn thời lượng</option>
                            {this.state.filmLength.map((data, i) => {
                                return <option key={i} value={data.id}>{data.FilmLengthDesc}</option>
                            })}
                        </select>
                    </div>
                </div>
                <div className="col-xs-12 col-md-22percent">
                    <div className="form-group">
                        <label htmlFor="drlCountry" className="control-label">Quốc Gia</label>
                        <select id="drlCountry" placeholder="select" ref="drlCountry" className="form-control">
                            <option value="">Chọn quốc gia</option>
                            {this.state.countries.map((data, i) => {
                                return <option key={i} value={data.id}>{data.country}</option>
                            })}
                        </select>
                    </div>
                </div>
                <div className="col-xs-12 col-md-12percent">
                    <div className="form-group">
                        <label className="control-label">&nbsp;</label>
                        <div className="input-group">
                            <span className="input-group-btn">
                                <button className="btn btn-primary btn-raised btn-block" onClick={this.filter.bind(this)} type="button">Lọc phim</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default FilterBar