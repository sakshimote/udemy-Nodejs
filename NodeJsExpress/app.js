


//const http=require('http');
const path=require('path');
const express=require('express');
const bodyParser=require('body-parser');

const adminRoutes=require('./routes/admin')
const shopRoutes=require('./routes/shop')

//const expressHbs=require('express-handlebars');
// const routes=require('./routes')


const app=express();


// app.engine('hbs',expressHbs({   layoutsDir: 'views/layouts/',
// defaultLayout: 'main-layout',
// extname: 'hbs'}
  
// ))


app.set('view engine', 'ejs');
app.set('views','views')
app.use(bodyParser.urlencoded(extended=false));
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminRoutes);
app.use(shopRoutes);





// app.use('/',(req,res,next)=>{
//     console.log('this always runs');
//     next();
    
//     })





// const server=http.createServer(app)


// server.listen(3000);


app.use((req,res,next)=>{
    res.status(404).render('404', {pageTitle: 'Page Not Found'});
})

app.listen(3000);