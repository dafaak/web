const fs = require('fs')//libreria de file system para manejar archivos
const nombreArchivo = 'archivo'
const contenidoArchivo = 'proooooobandoooooooo\n'
const contenidoAAgregar = 'agregado :V'

fs.readFile(nombreArchivo,
    'utf-8',
    (error, contenidoArchivo) => {  // Callback
        if (error) {
            console.error(error);
            try {
                throw new Error(error);
            } catch (e) {
                console.log(e);
            }
            console.log('Extra')
        } else {
            // Callback Hell!
            fs.writeFile(nombreArchivo, contenidoArchivo + contenidoAAgregar, (err) => {
                if (err) throw err;
                console.log('Archivo completado!');
                fs.writeFile(nombreArchivo, contenidoArchivo + contenidoAAgregar, (err) => {
                    if (err) throw err;
                    console.log('Archivo completado!');
                    fs.writeFile(nombreArchivo, contenidoArchivo + contenidoAAgregar, (err) => {
                        if (err) throw err;
                        console.log('Archivo completado!');
                        fs.writeFile(nombreArchivo, contenidoArchivo + contenidoAAgregar, (err) => {
                            if (err) throw err;
                            console.log('Archivo completado!');
                            fs.writeFile(nombreArchivo, contenidoArchivo + contenidoAAgregar, (err) => {
                                if (err) throw err;
                                console.log('Archivo completado!');
                                fs.writeFile(nombreArchivo, contenidoArchivo + contenidoAAgregar, (err) => {
                                    if (err) throw err;
                                    console.log('Archivo completado!');
                                    fs.writeFile(nombreArchivo, contenidoArchivo + contenidoAAgregar, (err) => {
                                        if (err) throw err;
                                        console.log('Archivo completado!');
                                        fs.writeFile(nombreArchivo, contenidoArchivo + contenidoAAgregar, (err) => {
                                            if (err) throw err;
                                            console.log('Archivo completado!');
                                            fs.writeFile(nombreArchivo, contenidoArchivo + contenidoAAgregar, (err) => {
                                                if (err) throw err;
                                                console.log('Archivo completado!');
                                                fs.writeFile(nombreArchivo, contenidoArchivo + contenidoAAgregar, (err) => {
                                                    if (err) throw err;
                                                    console.log('Archivo completado!');
                                                    fs.writeFile(nombreArchivo, contenidoArchivo + contenidoAAgregar, (err) => {
                                                        if (err) throw err;
                                                        console.log('Archivo completado!');
                                                        fs.writeFile(nombreArchivo, contenidoArchivo + contenidoAAgregar, (err) => {
                                                            if (err) throw err;
                                                            console.log('Archivo completado!');
                                                            fs.writeFile(nombreArchivo, contenidoArchivo + contenidoAAgregar, (err) => {
                                                                if (err) throw err;
                                                                console.log('Archivo completado!');
                                                                fs.writeFile(nombreArchivo, contenidoArchivo + contenidoAAgregar, (err) => {
                                                                    if (err) throw err;
                                                                    console.log('Archivo completado!');
                                                                    fs.writeFile(nombreArchivo, contenidoArchivo + contenidoAAgregar, (err) => {
                                                                        if (err) throw err;
                                                                        console.log('Archivo completado!');
                                                                        fs.writeFile(nombreArchivo, contenidoArchivo + contenidoAAgregar, (err) => {
                                                                            if (err) throw err;
                                                                            console.log('Archivo completado!');
                                                                            fs.writeFile(nombreArchivo, contenidoArchivo + contenidoAAgregar, (err) => {
                                                                                if (err) throw err;
                                                                                console.log('Archivo completado!');
                                                                                fs.writeFile(nombreArchivo, contenidoArchivo + contenidoAAgregar, (err) => {
                                                                                    if (err) throw err;
                                                                                    console.log('Archivo completado!');

                                                                                });
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });

        }
    });