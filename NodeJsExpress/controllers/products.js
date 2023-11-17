
const products=[];

exports.getAddProduct=(req,res,next)=>{
    console.log('in the middleware');
    res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product' ,
    formsCSS: true, productCSS: true, activeAddProduct: true});
    //next();
    
    }


    exports.postAddProduct=(req,res,next)=>{
        console.log(req.body);
        products.push({title:req.body.title})
       res.redirect('/')
        }


 exports.getProducts= (req,res,next)=>{
    //   console.log('in the another middleware');
    //   res.send('<h1>Hello from Express Js</h1>')
   //  console.log(adminData.products);
   //  res.sendFile(path.join(rootDir,'views','shop.html'))
 //  const products = adminData.products;
   res.render('shop', {prods: products, pageTitle: 'Shop', path: '/',
   hasProducts: products.length > 0,
   activeShop: true,
   productCSS: true});
       }