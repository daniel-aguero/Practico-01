import fs from 'fs';

const data = 'Este texto es un ejemplo. \n';

fs.writeFile('ejemplo.txt', data, (err)=>{
    if(err) throw err;
    console.log(`El archivo ha sido guardado.`);

    fs.readFile('ejemplo.txt', 'utf8', (err, content)=>{
        if(err) throw err;
        console.log(`Contenido del archivo:`);
        console.log(content);
    });
});