const  model=require('../model/user')
//const User= require('../model/user')
const User=model.User;



exports.createUser= async(req,res)=>{
    const newUser= await new User(req.body);
    newUser.save();
    res.status(201).json(req.body);
    }


    exports.signInUser= async(req,res)=>{
        const checkUser= await User.find({
            email: req.body.email,
            password: req.body.password
        })
     console.log(checkUser.length);
     
        if(checkUser.length>=1){
            
            res.status(200).json(checkUser);
        }else{
            res.status(403).json({message:'user not found'});
        }
        
       
        }


// exports.getAllUser=(req,res)=>{
//     console.log(req.params)
// res.json(users);
// }


// exports.getUser=(req,res)=>{
//     const id = +req.params.id;
//    const product= users.find(p=>p.id===id)
//     res.json(product)
// }






