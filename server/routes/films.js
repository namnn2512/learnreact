import express from 'express';
import filmDAL from '../DAL/filmDAL';

var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    filmDAL.getFilms(req).then(data => {
        res.json(data);
    }).catch(err => {
        res.json(err);
    });
});

router.get('/GetFilterDropdownData', (req, res) => {
    var result = {};
    console.log(req);
    Promise.all([filmDAL.getFilmLength(req), filmDAL.getFilmTypes(req), filmDAL.getYearPublished(req), filmDAL.getCountries(req)])
        .then(data => {
            result['filmLength'] = data[0];
            result['filmTypes'] = data[1];
            result['yearPublished'] = data[2];
            result['countries'] = data[3];
            res.json(result);
        })
        .catch(err => { console.log(err) });
});

router.get('/db', (req, res, next) => {
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
