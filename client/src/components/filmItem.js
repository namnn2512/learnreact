import React, { Component } from 'react';

class FilmItem extends Component {

    render() {
        return (
            <div className="col-xs-6 col-sm-4 col-md-2 portfolio-item">
                <a href="#">
                    <img className="img-responsive img-poster" src={this.props.imgUrl} alt="" />
                </a>
                <h3>
                    <a href="#">{this.props.filmName}</a>
                </h3>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default FilmItem