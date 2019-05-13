const fs = require ('fs');

function agregarArchivo(nombreArchivo, contenidoArchivo, callback) {

    fs.readFile(nombreArchivo, 'utf-8',(error,contenidoArchivoLeido)=>{

        if(error){
            fs.writeFile(nombreArchivo,contenidoArchivo, //'writeFile' Creea un nuevi archivo
                (err)=>{
                if(err){
                    console.log('Error de creeacion')
                    callback(err)
                }else{
                    console.log('Archivo creado')
                    callback(undefined,contenidoArchivo)
                }
                }
                )
        }else{
           fs.writeFile(
               nombreArchivo,contenidoArchivoLeido+contenidoArchivo,(err)=>{
                   if(err){console.log('Error de escritura')
                   callback(err)}
                   else {console.log('escritura OK!')
                   callback(undefined,contenidoArchivoLeido+contenidoArchivo)}})}})}




                   agregarArchivo('archivo',':V\n',(indefinido, texto)=>(console.log('Text:\n',texto)))






function variosArchivos(arregloNombres,callback) {
    const arregloRespuestas=[];
    arregloNombres.forEach(
        (string, indice)=>{
            const archivo=`${indice}-${string}.txt`;
            const contenido=string;
            fs.writeFile(archivo,
                contenido,(err)=>{
                    const respuesta={
                        nombreArchivo:archivo,
                        contenidoArchivo: contenido,
                        error: err
                    };
                    arregloRespuestas.push(respuesta);
                    const tamanioRespuesta=arregloRespuestas.length;
                    if(tamanioRespuesta===arregloNombres.length){
                        callback(arregloRespuestas);
                    }
                });
        }
    );
}

const arregloNombresArchivos=['a','b','c','d'];

variosArchivos(arregloNombresArchivos,
    (arregloRespuestas)=>{
        console.log('Exito',arregloRespuestas);
    });





function variosArchivosPromesas(arregloNombres,callback) {

    const arregloRespuestas=[];
    arregloNombres.forEach(
        (string, indice)=>{
            const archivo=`${indice}-${string}.txt`;
            const contenido=string;
            fs.writeFile(archivo,
                contenido,(err)=>{
                    const respuesta={
                        nombreArchivo:archivo,
                        contenidoArchivo: contenido,
                        error: err
                    };
                    arregloRespuestas.push(respuesta);
                    const tamanioRespuesta=arregloRespuestas.length;
                    if(tamanioRespuesta===arregloNombres.length){
                        callback(arregloRespuestas);
                    }
                });
        }
    );
}

const arregloNombresArchivos2=['v','w','x','y'];

variosArchivosPromesas(arregloNombresArchivos2,
    (arregloRespuestas)=>{
        console.log('Exito',arregloRespuestas);
    });
