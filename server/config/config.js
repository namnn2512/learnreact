import path from 'path';
const config = {
    root: path.normalize(`${__dirname}/../..`),

    mySqlConfig:{
        host : 'localhost',
        user : 'root',
        password : '123456',
        database : 'cafe_phim'
    },
    
    paging:{
        PER_PAGE: 30
    }
};

export default config;