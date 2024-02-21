const express = require('express');
const controller = require('../controller/Ccrew');
const jwt = require('../middleware');
const router = express.Router();

// localhost:8000/crew
router.post('/signup', controller.signup);
router.post('/login', controller.login);
router.get('/data', jwt.auth, controller.data);

// router.patch('/update', auth,controller.update);
// router.delete('/delete', auth,controller.delete);
module.exports = router;
