const express=require('express');
const mongoose=require('mongoose');
const cors = require('cors')
const server=express();
const morgan= require('morgan');
const productRouter=require('./routes/productRouter')
const userRouter=require('./routes/userRoutes')


// db Connection 


const URL='mongodb+srv://yyyuvraj11:Yuvraj123@cluster0.xdqosbi.mongodb.net/?retryWrites=true&w=majority'

main().catch(err => console.log(err,"error showing"));

async function main() {
  await mongoose.connect('mongodb+srv://yyyuvraj11:Yuvraj123@cluster0.xdqosbi.mongodb.net/?retryWrites=true&w=majority');
console.log('database connected');

}

//Schemma======





//parser

server.use(cors());

server.use(morgan('default'));
server.use(express.json());
 server.use(express.static('public'));
server.use('/products',productRouter.router);
server.use('/users',userRouter.router);







server.listen(process.env.URL||8080,()=>{
    console.log('Server started')
});





















    // console.log(req.method, req.ip,req.hostname,new Date(),req.get('User-Agent'))    // LOgger - Middleware
    // next();
    // })
    
    
    
    // const auth= ((req,res,next)=>{
    //    // console.log(req.query)
    // //     if(req.body.password=='123'){
    // //         next();
    // //     }else{
    // //   res.sendStatus(401);// key loger 
    // //     }
       
    // next();
    // })
    
    
    
    
    
    
    //----------------API ----END-POINT-----------------
    
    
    
    
    
    // Products
    
    // API ROUTE , BASE URL , GOOGLE.COM/API/V2 VERSION
    
    
    
    
    
    
    
    
    
    
         //  ==========================     APIs.===============================...............................
    
    
    
    
    
    
    
    
    
    
    
    
    // server.get('/',(req,res)=>{
    
    //     //res.sendStatus(404);
    
    //     //res.json(products)
    //   //res.status(201).send('<h1>hello</h1>')  
    
    //   //res.sendFile('/Users/yuvraj/Desktop/Backend-rev/index.html')
    // })
    
    
























//const data = {age:5};

// const server = http.createServer((req,res)=>{

//     const id=req.url.split('/')[2];
//     const product=products.find(p=>p.id==(+id))

//     console.log(product);
//     if(req.url.startsWith('/product')){
//         console.log(req.url,req.method)
//         res.setHeader('Content-Type','text/html');
//             let modifiedIndex=index.replace('**title**',product.title)
//             .replace('**url**',product.thumbnail)
//             .replace('**price**',product.price)
//             .replace('**rating**',product.rating);
//             res.end(modifiedIndex);
//             return;
//     }
 
//     //  '/product':
//     //         res.setHeader('Content-Type','text/html');
//     //         let modifiedIndex=index.replace('**title**',product.title)
//     //         .replace('**url**',product.thumbnail)
//     //         .replace('**price**',product.price)
//     //         .replace('**rating**',product.rating);
//     //         res.end(modifiedIndex);
//     //         break;

//     switch(req.url){
//         case '/':
//             res.setHeader('Content-Type', 'text/html');
//             res.end(index);
//             break;


//             case '/api':
//                 res.setHeader('Content-Type','application/json');
//                 res.end(JSON.stringify(data));
//                 break;
        
//         default:    
//              res.writeHead(404);
//              res.end();
//              break;
//     } 

//     console.log("server Started");
// //     res.setHeader("Dummy",'DummyValue');
// //     res.setHeader('Content-Type', 'text/html')
// //   //  res.setHeader("Content-type",'application/json');
// //     res.end(index);
// })

// server.listen(8080);