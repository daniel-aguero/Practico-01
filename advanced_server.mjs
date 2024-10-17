import http from 'http';
import url from 'url';

const hostname = '127.0.0.1';
const port = 5500;

const server = http.createServer((req, res)=>{
    const parsedUrl = url.parse(req.url, true);
    const pathName = parsedUrl.pathname;

    const method = req.method;

    if(pathName === '/' && method === 'GET')
    {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Pagina de Inicio\n');
    }
    else
    if(pathName === '\about' && method === 'GET')
    {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Acerca de nosotros');
    }
    else
    if(pathName === '\data' && method === 'POST')
    {
        let body = '';
    
    req.on('data', chunk=>{
        body += chunk.toString();
    });

    req.on('end', ()=>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(`Datos recibidos: ${body}\n`);
    });
    }
    else
    {
        res.statusCode = 404;
        res.end(`Ruta no encontrada\n`);
    }
});

server.listen(port, hostname, ()=>{
    console.log(`Servidor corriendo en http://${hostname}:${port}`);
});