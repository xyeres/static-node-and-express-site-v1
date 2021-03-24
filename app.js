const express = require('express');
const pug = require('pug');
const routes = require('./routes')
var path = require('path');
const { nextTick } = require('process');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/static', express.static('public'));

app.use('/', routes);

app.use(function (req, res, next) {
    const err = new Error('Sorry, that page cannot be found!');
    err.status = 404;
    err.message = err.message || 'Page not found!';
    next(err);
})

app.listen('3000');
