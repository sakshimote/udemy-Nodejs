const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    // console.log(req.url,req.method,req.headers);
  // process.exit();

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
    console.log(url);
    fs.writeFileSync('message.txt','Dummy text');
    res.statusCode=302;
    res.setHeader('Location','/');
   res.write('My first pag');
   return res.end();
   //return;
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My first page</title></head>');
  res.write('<body><h1>Hello form Nodejs server</h1></body>');
  res.write('</html>');
  res.end();
})

server.listen(3000);