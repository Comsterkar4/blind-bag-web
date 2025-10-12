const express = require ('express');
const router = express.Router();
const userController = require('../Controllers/UserController');
const UserController = require('../Controllers/UserController');

router.get('/',userController.getUser);

router.post('/', UserController.addUser);

router.put('/:id', UserController.updateUser);

module.exports = router;