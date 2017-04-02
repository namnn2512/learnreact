import express from 'express';
import path from 'path';
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.sendFile(path.resolve('./client/views/index.html'));

});

module.exports = router;
