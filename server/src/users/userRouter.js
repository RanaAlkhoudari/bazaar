const express = require('express');

const ShowUsers = require('./controllers/showUsers');
const ShowUser = require('./controllers/showUser');
const CreateUser = require('./controllers/createUser');
const UpdateUser = require('./controllers/updateUser');
const DeleteUser = require('./controllers/deleteUser');

const router = express.Router();

router.get('/', ShowUsers);

router.get('/:id', ShowUser);

router.post('/create', CreateUser);

router.patch('/update/:id', UpdateUser);

router.delete('/:id', DeleteUser);

module.exports = router;
