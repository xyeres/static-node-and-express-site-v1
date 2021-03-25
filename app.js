const express = require('express');
const routes = require('./routes')
var path = require('path');

const app = express();

// Set view engine and path to views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// Set static virtual url
app.use('/static', express.static('public'));

// Set all routes to use routes module
app.use('/', routes);

// Handle 404 errors
app.use(function (req, res, next) {
    const err = new Error('Sorry, that page cannot be found.');
    err.status = 404;
    res.render('page-not-found', { err })
});

// Error handler
app.use(function(err, req, res, next) {
    // Set default error message
    err.message = err.message || 'An error occurred while trying to process your request.';
    // Set response status code
    res.status(err.status || 500);
    // Log it out
    console.error(`${err.message} (${err.status})`)
    // Render a simple error page to user
    res.render('error', { err })
});

app.listen('3000', () => {
    console.log('App running on localhost and listening on port 3000...:)')
});
