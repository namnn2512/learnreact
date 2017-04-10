import db from '../mysql/mysql';
import config from '../config/config';

var filmDAL = {
    getFilms: function (req) {
        return new Promise((resolve, reject) => {
            db.getConnection().then(connection => {
                var page = req.query.page ? parseInt(req.query.page, 10) : 0;
                var perPage = parseInt(config.paging.PER_PAGE, 10);
                var offset = (page - 1) * perPage;
                var filmName = req.query.searchText ? req.query.searchText : '';
                var filterParams = JSON.parse(req.query.filterParams);

                var queryfilmName = 'FilmName like ' + connection.escape('%' + filmName + '%');
                var queryLength = filterParams.filmLength ? 'Length = ' + connection.escape(filterParams.filmLength) : '';
                var queryYearPublished = filterParams.yearPublished ? 'YearPublished = ' + connection.escape(filterParams.yearPublished) : '';
                var queryFilmType = filterParams.filmType ? 'FilmType = ' + connection.escape(filterParams.filmType) : '';
                var queryCountry = filterParams.country ? 'Country = ' + connection.escape(filterParams.country) : '';

                var filterString = [queryfilmName, queryLength, queryYearPublished, queryFilmType, queryCountry].filter((val) => { return val; }).join(' AND ');
                console.log(filterString);

                connection.query('Select SQL_CALC_FOUND_ROWS * from films where ' + filterString + ' limit ?,?', [offset, perPage], (err, rows, fields) => {
                    if (err) {
                        connection.release();
                        console.log('error in query');
                        return reject(err.stack);
                    } else {
                        connection.query('SELECT FOUND_ROWS() as rowsCount;', (err2, total) => {
                            connection.release();
                            if (err2) {
                                console.log('error in sub query');
                                return reject(err2.stack);
                            } else {
                                var pagecount = Math.ceil(total[0].rowsCount / perPage)
                                var data = {
                                    films: rows,
                                    total_count: pagecount
                                };
                                return resolve(data);
                            }
                        });

                    }
                });
            }).catch(err => {
                return reject(err);
            });
        });
    },

    getFilmLength: function (req) {
        return new Promise((resolve, reject) => {
            db.getConnection().then(connection => {
                var sqlQuery = 'select * from filmlength;';
                connection.query(sqlQuery, (err, rows, fields) => {
                    connection.release();
                    if (err) {
                        console.log('error in query');
                        return reject(err.stack);
                    } else {
                        return resolve(rows);
                    }
                }).catch(err => {
                    return reject(err);
                });
            });
        });
    },

    getFilmTypes: function (req) {
        return new Promise((resolve, reject) => {
            db.getConnection().then(connection => {
                var sqlQuery = 'select * from filmtypes;';
                connection.query(sqlQuery, (err, rows, fields) => {
                    connection.release();
                    if (err) {
                        console.log('error in query');
                        return reject(err.stack);
                    } else {
                        return resolve(rows);
                    }
                }).catch(err => {
                    return reject(err);
                });
            });
        });
    },

    getCountries: function (req) {
        return new Promise((resolve, reject) => {
            db.getConnection().then(connection => {
                var sqlQuery = 'select * from country;';
                connection.query(sqlQuery, (err, rows, fields) => {
                    connection.release();
                    if (err) {
                        console.log('error in query');
                        return reject(err.stack);
                    } else {
                        return resolve(rows);
                    }
                }).catch(err => {
                    return reject(err);
                });
            });
        });
    },

    getYearPublished: function (req) {
        return new Promise((resolve, reject) => {
            db.getConnection().then(connection => {
                var sqlQuery = 'select distinct YearPublished from films ORDER BY YearPublished;';
                connection.query(sqlQuery, (err, rows, fields) => {
                    connection.release();
                    if (err) {
                        console.log('error in query');
                        return reject(err.stack);
                    } else {
                        return resolve(rows);
                    }
                }).catch(err => {
                    return reject(err);
                });
            });
        });
    },

    getFilmDetail: function(req){
        return new Promise((resolve, reject) => {
            db.getConnection().then(connection => {
                var id = req.query.filmId ? parseInt(req.query.filmId, 10) : 0;
                var query = 'select a.Id, a.FilmName, a.Description, a.ImgUrl, a.YearPublished, a.Slug, a.TrailerUrl, UNIX_TIMESTAMP(a.TimeLength) as TimeLength, b.Country, c.FilmTypeDesc, c.FilmTypeUrl from films a'
                            + ' left join country b'
                            + ' on a.Country = b.id'
                            + ' left join filmtypes c'
                            + ' on a.FilmType = c.id'
                            + ' where a.Id = ' + connection.escape(id);
                connection.query(query, (err, rows, fields) => {
                    connection.release();
                    if (err) {
                        console.log('error in query');
                        return reject(err.stack);
                    } else {
                        return resolve(rows);
                    }
                }).catch(err => {
                    return reject(err);
                });
            });
        });
    }
};

export default filmDAL;