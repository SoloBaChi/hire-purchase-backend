const express = require('express');
const router = express.Router();

const userController = require('../controller/userController');

//Note: the post method takes two parameter name of the path and callbackfunc
router.post('/create-user',userController.createUser);
router.get('/get-user',userController.findUser);
router.put('/update-user',userController.updateUser);
router.delete('/delete-user',userController.deleteUser);

module.exports = router;