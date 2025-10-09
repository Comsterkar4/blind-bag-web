const express = require ('express');
const router = express.Router();
const userController = require('../Controllers/UserController');
 
router.get('/',userController.getUser);

module.exports = router;