import express from 'express';
import db from '../mysql/mysql';
import config from '../config/config'

var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    db.getConnection().then(connection => {
        var page = req.query.page ? parseInt(req.query.page, 10) : 0;
        var perPage = parseInt(config.paging.PER_PAGE, 10);
        var offset = (page - 1) * perPage;
        var filmName = req.query.searchText ? req.query.searchText : '';     
        var filterParams = JSON.parse(req.query.filterParams);

        var queryfilmName = 'FilmName like '+ connection.escape('%' + filmName + '%');
        var queryLength = filterParams.filmLength ? 'Length = ' + connection.escape(filterParams.filmLength) : '';
        var queryYearPublished = filterParams.yearPublished ? 'YearPublished = ' + connection.escape(filterParams.yearPublished) : '';
        var queryFilmType = filterParams.filmType ? 'FilmType = ' + connection.escape(filterParams.filmType) : '';
        var queryCountry = filterParams.country ? 'Country = ' + connection.escape(filterParams.country) : '';

        var filterString = [queryfilmName, queryLength, queryYearPublished, queryFilmType, queryCountry].filter( (val) => {return val;}).join(' AND ');
        console.log(filterString);

        connection.query('Select SQL_CALC_FOUND_ROWS * from films where '+ filterString +' limit ?,?', [offset, perPage], (err, rows, fields) => {
            if (err) {
                connection.release();
                res.send('error in query');
            } else {
                connection.query('SELECT FOUND_ROWS() as rowsCount;', (err2, total) => {
                    connection.release();
                    if (err2) {
                        res.send('error in subquery');
                    } else {
                        var pagecount = Math.ceil(total[0].rowsCount / perPage)
                        var data = {
                            films: rows,
                            total_count: pagecount
                        };
                        res.json(data);
                    }
                });

            }
        });
    }).catch(err => {
        connection.release();
        res.send('connect fail');
    });
});

router.get('/db', (req, res) => {
    db.getConnection(function (err, connection) {
        if (err) {
            connection.release();
            res.send('connect fail');
        } else {
            connection.query('Select * from films', function (err, rows, fields) {
                connection.release();
                if (err) {
                    res.send('error in query');
                } else {
                    res.json(rows.length);
                }
            });
        }
    });
});

router.get('/insertfilms', (req, res) => {

    db.getConnection(function (err, connection) {
        if (err) {
            connection.release();
            res.send('connect fail');
        } else {
            var results = [];
            for (i = 0; i < films.length; i++) {
                var film = films[i];

                film['ImgUrl'] = '/images/' + Math.floor((Math.random() * 20) + 1) + '.jpg';
                film['YearPublished'] = Math.floor((Math.random() * 38) + 1980);
                film['FilmType'] = Math.floor((Math.random() * 4) + 1);
                film['Length'] = Math.floor((Math.random() * 4) + 1);
                film['Country'] = Math.floor((Math.random() * 19) + 1);
                film['CreatedDate'] = new Date();
                film['CreatedBy'] = 'Nam Nguyen';

                // connection.query('INSERT INTO films SET ?', film, function (err, result, fields) {
                //     if(err){
                //         console.log(err);
                //     }else{
                //         console.log(result);
                //     }
                // });
            }
            connection.release();
            res.json(results);
        }
    });
});




module.exports = router;
