
const mongoose=require('mongoose');
const { Schema } = mongoose;
const productSchema = new Schema({
    title:{type: String, required:true}, 
    review:{type:String },
    rating:{type:Number, min:[0,'wrong rating'],max:[5,'wrong max rating']},
   director:{type:String, required:true},
   artist:{type:String, required:true},
    thumbnail:{type:String, required:true},
  releasedDate:{type:String, required:true}

  });





  exports.Product = mongoose.model('Product', productSchema);