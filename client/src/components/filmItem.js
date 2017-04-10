import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class FilmItem extends Component {

    render() {
        return (
            <div className="col-xs-6 col-sm-4 col-md-2 portfolio-item">
                <Link to={this.props.urlDetail}>
                    <img className="img-responsive img-poster" src={this.props.imgUrl} alt="" />
                </Link>
                <h3>
                    <Link to={this.props.urlDetail}>{this.props.filmName}</Link>
                </h3>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default FilmItem