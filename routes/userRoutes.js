const express=require('express');
const userController=require('../controller/user');
const router=express.Router();
router
.post('/signUp',userController.createUser)
.post('/logIn',userController.signInUser)
// .get('/',userController.getAllProducts) 
// .get('/:id',userController.getProduct)
exports.router=router;