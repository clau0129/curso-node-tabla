const fs = require('fs');
const colors = require('colors');

// Creando un new Promise
/*const crearArchivo = (base = 5) => {
    return new Promise((reject, resolve) => {
        console.log('============================');
        console.log('         Tabla del: ', base);
        console.log('============================');

        let salida = '';
        for(let i = 1; i <= 10; i++){
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        console.log(salida);

        ---fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
            if(err) throw err;

            console.log(`tabla-${base}.txt creado`);
        })----

        fs.writeFileSync(`tabla-${base}.txt`, salida);
        resolve(`tabla-${base}.txt`);
    })

    
}*/

//Creando una función asíncrona que ya devuelve una promesa
//Se crea el try-catch para manejar el reject de la promesa cuando hay un error
const crearArchivo = async(base = 5, listar = false, hasta=10) => {
    try{        
        let salida = '';
        for(let i = 1; i <= hasta; i++){
            salida += `${base} x ${i} = ${base * i}\n`;
        }
    
        if(listar){
            console.log('============================'.america);
            console.log('         Tabla del: '.bgCyan, colors.blue(base));
            console.log('============================'.america);
            console.log(salida.rainbow);
        }
        
        //Documentado porque es mejor trabajar con archivos asíncronos
        /* ---fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
            if(err) throw err;
    
            console.log(`tabla-${base}.txt creado`);
        })----*/
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`; 
    }catch(error){
        throw error;
    }
}



module.exports = {
    //Esto es redundante porque las variables se llaman igual por lo que podemos dejar solo un nombre
    //crearArchivo : crearArchivo
    crearArchivo
}