
const fs=require('fs');

const requestHandler=(req,res)=>{

  const url=req.url;
  const method=req.method;

  
  if(url==='/'){
    res.write('<html>');
    res.write('<head><title>Enter message</title></head>');
    res.write('<body><form action="/message" method="POST" ><input type="text" name="message"><button type="submit">Submit</button></form></body>');
    res.write('</html>');
    return res.end();
  }

  console.log("req.url: " + url.split("?")[0]);

  if(url.split("?")[0]==='/message' && method==='POST'){
const body=[];

    req.on('data',(chunk)=>{

body.push(chunk);
    });


    req.on('end',()=>{
      const parsedBody=Buffer.concat(body).toString();
      console.log(parsedBody);

      const message=parsedBody.split('=')[1];
      fs.writeFile('message.txt',message,(err)=>{

        res.statusCode=302;
        res.setHeader('Location','/');
        return res.end();
    
      });
    });


   // console.log(url);
  //  fs.writeFileSync('message.txt',message);
 
   //return;
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My first page</title></head>');
  res.write('<body><h1>Hello form Nodejs server</h1></body>');
  res.write('</html>');
  res.end();




}


    // console.log(req.url,req.method,req.headers);
  // process.exit();

module.exports = requestHandler;
