import http from 'http';

const hostname = '127.0.0.1';

const port = 5500;

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    res.end(`Hola Mundo`);
});

server.listen(port, hostname,()=>{
    console.log(`El servidor se esta ejecutando en http://${hostname}:${port}`);
});
