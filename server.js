const http = require('http') // it is a nodejs module and handles http related things
const fs = require('fs')       // it is also a nodejs module and handles file system 
const path = require('path') // it handles paths

// there are a lot of port numbers to listen requests
const port = 5500;


// // we are using the functionalities of http module
// const server = http.createServer()
// // we have created the server 



// using http, created server which takes has two parts request and response
const server = http.createServer((req, res)=>{
    // __dirname refers to current directory and next line is ternary.
    const filePath = path.join(__dirname, req.url === '/' ? "index.html": req.url)
    // get the file extension name and convert it into lowercase and then to string
    const extName = String(path.extname(filePath)).toLowerCase()
    // mentioning to support which types of files
    const mimeTypes = {
        '.html' : 'text/html',
        '.css' : 'text/css',
        '.js' : 'text/javascript',
        '.png' : 'text/png',
    }

    const contentType = mimeTypes[extName] || 'application/octet-stream'; // second part is a generic file name

    // now lets move to grab the file and lets see what to do
    fs.readFile(filePath, (err,content)=>{
        if(err){
            if(err.code === "ENOENT"){
                res.writeHead(404, {"Content-Type" : 'text/html'})
                res.end("404: File Not Found BRoooo");
            }
        }else{
            res.writeHead(200, {'Content-Type' : contentType});
            res.end(content, "utf-8");
        }
    })
});

server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}.`);
})