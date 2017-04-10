import React, { Component } from 'react';
import FilmItem from './filmItem';

class FilmRow extends Component {

    render() {
        const lstFilms = this.props.lstFilms;
        return (
            <div className="row">
            {lstFilms.map((film, i)=>{
                return <FilmItem key = {i} imgUrl = {film.ImgUrl} description = {film.Description} filmName = {film.FilmName} urlDetail = {film.Slug +'-'+film.Id}/>
            })}
            </div>
        )
    }
}

export default FilmRow