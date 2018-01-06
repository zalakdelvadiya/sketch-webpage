var express = require('express');
var router = express.Router();

/* GET web page. */
router.get('/', function(req, res, next) {
    res.render('web', { title: 'Lets sketch' });
});

module.exports = router;
