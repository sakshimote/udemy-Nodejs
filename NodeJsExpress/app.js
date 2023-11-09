


const http=require('http');
const express=require('express');

// const routes=require('./routes')

const app=express();
app.use((req,res,next)=>{
console.log('in the middleware');
next();

})

app.use((req,res,next)=>{
    console.log('in the another middleware');
    res.send('<h1>Hello from Express Js</h1>')
    })
    


const server=http.createServer(app)


server.listen(3000);