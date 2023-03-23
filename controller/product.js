const mongoose= require('mongoose');
const  model=require('../model/product')
const Product=model.Product;

exports.createProduct= async(req,res)=>{
   
 const product= await new Product(req.body);
 
 product.save()

    res.status(201).json(req.body);
}

exports.getAllProducts=async(req,res)=>{
    const products= await Product.find();
    console.log(req.params)
res.json(products);
}


exports.getProduct=async(req,res)=>{
    const id = req.params.id;
    console.log(id);
    const product= await Product.findById(id);
    res.json(product)
}



exports.replaceProduct=async(req,res)=>{
    const id = req.params.id;
    try{
 const doc=await Product.findOneAndUpdate({_id:id},req.body,{new:true})
 res.status(201).json(doc);
} catch(err){
    console.log(err);
    res.status(400).json(err);
}
  
}


exports.updateProduct=async(req,res)=>{
    const id = req.params.id;

    try{
        const doc=await Product.findOneAndUpdate({_id:id},req.body,{new:true})
        console.log(doc,'hello')
        res.status(201).json(doc);
        
       } catch(err){
           console.log(err,'yuvraj');
           res.status(400).json(err);
          
       }
         
       }

exports.deleteProduct=async(req,res)=>{
    const id = req.params.id;
    try{
        const doc=await Product.findOneAndDelete({_id:id},req.body,{new:true})
        res.status(201).json(doc);
       } catch(err){
           console.log(err);
           res.status(400).json(err);
       }
         
       }


