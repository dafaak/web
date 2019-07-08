const fs = require('fs')
let jsonData
let resepi  = []
let abcRes = [
    {a: false}, {b: false}, {c: false}, {d: false}, {e: false},
    {f: false}, {g: false}, {h: false}, {i: false}, {j: false},
    {k: false}, {l: false}, {m: false}, {n: false}, {o: false},
    {p: false}, {q: false}, {r: false}, {s: false}, {t: false},
    {u: false}, {v: false}, {w: false}, {x: false}, {y: false},
    {z: false}];
let abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const promesaLectura = new Promise(
    (resolve, reject) => {
        fs.readFile('movie.json', 'utf8',
            (err, contenidoArchivo) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(contenidoArchivo)

                }
            })
    }
);

promesaLectura
    .then((contenidores) => {

        jsonData = JSON.parse(contenidores);
        console.log('datos listos :V')
        ////////////////////////////////NOMBRES////////////////////////////////////
        names = jsonData.results
            .map(
                movie => movie.name
            ).unique()

        console.log('names:  ', names)
////////////////////////////////////////Type////////////////////////////////////////////////
        types = jsonData.results
            .map(
                movie => movie.type
            ).unique()

        console.log('Types  ', types)
        ////////////////////////////////////GENERO///////////////////

        genero = jsonData.results
            .map(
                movie => movie.gender
            ).unique()

        console.log('Genero  ', genero)
/////////////////////////////////STATUS////////////////////////////////////77
        estado = jsonData.results
            .map(
                movie => movie.status
            ).unique()

        console.log('Estado:  ', estado)

        //////////////////////////////////////Busque los tipos de "name" de origin en el arreglo movie.json//////////////7


        origen = jsonData.results
            .map(
                movie => movie.origin.name
            ).unique()

        console.log('Origen  ', origen)

        ///////////////////////////////////Busque los tipos de "name" de location en el arreglo movie.json

        localizacion = jsonData.results
            .map(
                movie => movie.location.name
            ).unique()

        console.log('Localizacion:  ', localizacion)
        ////////////////////7Clasifique y cree diferentes arreglos dependiendo del type, gender, status, origin y location
////arreglo tipos
        for (let i = 0; i < types.length; i++) {
            let array = types[i]

            let $array = []
            jsonData.results.map(movie => {

                if (movie.type === types[i]) {

                    $array.push(movie)
                }
            })
            console.log('arreglo tipos: \n\n ', types[i], $array)
        }

///arreglo genero

        for (let i = 0; i < genero.length; i++) {
            let array = genero[i]

            let $array = []
            jsonData.results.map(movie => {

                if (movie.gender === genero[i]) {

                    $array.push(movie)
                }
            })
            console.log('arreglo tipos: \n\n ', genero[i], $array)
        }
        ///arreglo status



        for (let i = 0; i < estado.length; i++) {
            let array = estado[i]

            let $array = []
            jsonData.results.map(movie => {

                if (movie.status === estado[i]) {

                    $array.push(movie)
                }
            })
            console.log('arreglo tipos: \n\n ', estado[i], $array)
        }

        //arreglo origen

        for (let i = 0; i < origen.length; i++) {
            let array = origen[i]

            let $array = []
            jsonData.results.map(movie => {

                if (movie.origin.name === origen[i]) {

                    $array.push(movie)
                }
            })
            console.log('arreglo tipos origen: \n\n ', origen[i], $array)
        }

///arreglo localizaciones

        for (let i = 0; i < localizacion.length; i++) {
            let array = localizacion[i]

            let $array = []
            jsonData.results.map(movie => {

                if (movie.location.name === localizacion[i]) {

                    $array.push(movie)
                }
            })
            console.log('arreglo tipos localizacion: \n\n ', origen[i], $array)
        }




        //abcedario
        for (let i = 0; i < abc.length; i++) {
            jsonData.results.some(movie => {
                if (movie.name.startsWith(abc[i])) {
                    abcRes[i] = '{ '+ abc[i] + ':' + ' true }';

                }

            })


        }
        console.log('resultado Abecedario: ', abcRes)


        ///estatus vivo
        let resstatus = jsonData.results.every(per => {
            per.status == 'Alive'
        })
        console.log('Todos los personajes estan vivos: ', resstatus)

////////cantidad de episodios por personaje
        jsonData.results.map(per =>
            resepi.push('' + per.name + ':' + per.episode.length))

        console.log('Episodios por personaje:',resepi)

    })
    .catch((error) => {
        console.log('error', error), console.log(error)
    })


Array.prototype.unique = function (a) {
    return function () {
        return this.filter(a)
    }
}(function (a, b, c) {
    return c.indexOf(a, b + 1) < 0
});
