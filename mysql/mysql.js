import mysql from 'mysql';
import config from '../config/config';

var pool = mysql.createPool(config.mySqlConfig);
var database = {
    getConnection: function () {
        return new Promise((resolve, reject) => {
            pool.getConnection(function (err, connection) {
                if (err) {
                    return reject(err);
                }
                return resolve(connection);
            });
        });
    }
}

export default database;