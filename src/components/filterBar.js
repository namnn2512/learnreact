import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import axios from 'axios';

class FilterBar extends Component {
    constructor(){
        super();
        this.state = {
            filmLength:[],
            filmTypes:[],
            yearPublished:[],
            countries:[]
        };
    }
    componentDidMount() {
        this.loadFilterData();
    }
    loadFilterData() {
        axios.get('/films/GetFilterDropdownData').then((res) => {
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
        var data ={
            filmLength: '',
            yearPublished: '',
            filmType: 1,
            country: '',
        };

        data.filmLength = ReactDOM.findDOMNode(this.refs.drlFilmLength).value;
        data.yearPublished = ReactDOM.findDOMNode(this.refs.drlYearPublished).value;
        data.filmType = ReactDOM.findDOMNode(this.refs.drlFilmType).value;
        data.country = ReactDOM.findDOMNode(this.refs.drlCountry).value;
        this.props.onClick(data);
    }
    render() {
        return (
            <div className="row">
                <div className="col-xs-12 col-md-22percent">
                    <FormGroup controlId="drlFilmType">
                        <ControlLabel>Thể Loại</ControlLabel>
                        <FormControl componentClass="select" placeholder="select" ref="drlFilmType">
                        <option value="">Chọn thể loại</option>
                            {this.state.filmTypes.map((data, i)=>{
                                return <option key={i} value={data.id}>{data.FilmTypeDesc}</option>
                            })}
                        </FormControl>
                    </FormGroup>
                </div>
                <div className="col-xs-12 col-md-22percent">
                    <FormGroup controlId="drlYearPublished">
                        <ControlLabel>Năm Phát Hành</ControlLabel>
                        <FormControl componentClass="select" placeholder="select" ref="drlYearPublished">
                        <option value="">Chọn năm phát hành</option>
                            {this.state.yearPublished.map((data, i)=>{
                                return <option key={i} value={data.YearPublished}>{data.YearPublished}</option>
                            })}
                        </FormControl>
                    </FormGroup>
                </div>
                <div className="col-xs-12 col-md-22percent">
                    <FormGroup controlId="drlFilmLength">
                        <ControlLabel>Thời Lượng</ControlLabel>
                        <FormControl componentClass="select" placeholder="select" ref="drlFilmLength">
                        <option value="">Chọn thời lượng</option>
                            {this.state.filmLength.map((data, i)=>{
                                return <option key={i} value={data.id}>{data.FilmLengthDesc}</option>
                            })}
                        </FormControl>
                    </FormGroup>
                </div>
                <div className="col-xs-12 col-md-22percent">
                    <FormGroup controlId="drlCountry">
                        <ControlLabel>Quốc Gia</ControlLabel>
                        <FormControl componentClass="select" placeholder="select" ref="drlCountry">
                        <option value="">Chọn quốc gia</option>
                            {this.state.countries.map((data, i)=>{
                                return <option key={i} value={data.id}>{data.country}</option>
                            })}
                        </FormControl>
                    </FormGroup>
                </div>
                <div className="col-xs-12 col-md-12percent">
                    <FormGroup>
                        <ControlLabel>&nbsp;</ControlLabel>
                        <Button bsStyle="primary" block onClick={this.filter.bind(this)}>Lọc phim</Button>
                    </FormGroup>
                </div>
            </div>
        )
    }
};

export default FilterBar