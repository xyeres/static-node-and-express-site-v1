const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

// Index router
router.get('/', (req, res) =>{
    res.render("index", { projects });
})

// About 
router.get('/about', (req, res) =>{
    res.render("about");
})

// Project
router.get('/project/:id', (req, res) => {
    const project = projects[id];
    res.render("project", { project });
});

// Test error handling
router.get('/error', (req, res, next) => {
    const err = new Error('Something Has Gone Off!');
    err.status = 500;
    next(err);
})

module.exports = router;