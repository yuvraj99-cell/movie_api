const express=require('express');
const productController=require('../controller/product');
const router=express.Router();
router
.get('/',productController.getAllProducts) 
.get('/:id',productController.getProduct)
.post('/',productController.createProduct)
.patch('/review/:id',productController.updateProduct)
.delete('/:id',productController.deleteProduct)
.put('/:id', productController.replaceProduct);

exports.router=router;