const fs = require('fs')

const promesaLectura= new Promise(
    (resolve)=>{
        fs.readFile('archivo.txt','utf8',
             (err,contenidoArchivo)=>{
            if(err){
                resolve('Error')
            }else{
                resolve(contenidoArchivo)
            }
             })
    }

);


const promesaEscritura=(contenidoarchivo)=>
     new Promise(
    (resolve, reject)=>{
        const contenido=contenidoarchivo+':V'

        fs.writeFile('archivo.txt',contenido,
            (err)=>{
                if(err){
                    reject(Err)
                }else{
                    resolve(contenido)
                }
            })
    }

);







/*
promesaLectura
    .then((contenidores)=>
{
    console.log('todo bien :V ...   '+contenidores)
 promesaEscritura(contenidores)
})
    .then ((contenidores)=>{
        return promesaEscritura(contenidores)
    })


promesaEscritura(contentidores)
            .then((contenido)=>{
                console.log('contenido actual :V ...   ',contenido)
            })
            .catch((err)=>{
                console.log('>:V Error de escritura...   ',err)
            })

*/






promesaLectura
    .then((contenidores)=>
    {
        console.log('todo bien :V ...   '+contenidores)
        promesaEscritura(contenidores)
            .then((contenido)=>{
                console.log('contenido actual :V ...   ',contenido)
            })
            .catch((err)=>{
                console.log('>:V Error de escritura...   ',err)
            })
    })






//callbacks -> has esto, luego esto
//promise -> calcula esto(usando esto)

/* nombrePromesa(parametros)
.then(funcion(resultado)){
hacer algo con el resultado}

.catch(funcion(error))
 */