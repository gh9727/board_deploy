const express = require('express');
const controller = require('../controller/Cpage');
const router = express.Router();

// localhost:8000
router.get('/', controller.main);
router.get('/signup', controller.signup);
router.get('/login', controller.login);
router.get('/post', controller.post);

module.exports = router;
