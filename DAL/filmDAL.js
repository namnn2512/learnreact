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

                connection.query('Select SQL_CALC_FOUND_ROWS * from films1 where ' + filterString + ' limit ?,?', [offset, perPage], (err, rows, fields) => {
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
                                console.log(data);
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
};

export default filmDAL;