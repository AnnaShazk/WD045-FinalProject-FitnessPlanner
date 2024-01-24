const express = require('express');
const userRouter = express.Router();

userRouter.post('/', createUser);
userRouter.get('/', getAllUsers);
userRouter.get('/:id', getUserById);
userRouter.put('/:id', updateUserById);
userRouter.delete('/:id', deleteUserById);

module.exports = userRouter;