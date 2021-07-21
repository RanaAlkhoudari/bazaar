const express = require('express');

const ShowUsers = require('./controllers/showUsers');
const ShowUser = require('./controllers/showUser');
const CreateUser = require('./controllers/createUser');
const UpdateUser = require('./controllers/updateUser');
const DeleteUser = require('./controllers/deleteUser');
const SingIn = require('./controllers/signIn');

const router = express.Router();

router.get('/', ShowUsers);

router.get('/:id', ShowUser);

router.post('/signup', CreateUser);

router.patch('/update/:id', UpdateUser);

router.delete('/:id', DeleteUser);

router.post('/signin', SingIn);

module.exports = router;
