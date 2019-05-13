const fs = require('fs')
let jsonData
let abcRes = [
    {a: false}, {b: false}, {c: false}, {d: false}, {e: false},
    {f: false}, {g: false}, {h: false}, {i: false}, {j: false},
    {k: false}, {l: false}, {m: false}, {n: false}, {o: false},
    {p: false}, {q: false}, {r: false}, {s: false}, {t: false},
    {u: false}, {v: false}, {w: false}, {x: false}, {y: false},
    {z: false}];
let abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let sumaMass = 0
let sumaHeight = 0
let resFilms = []
const promesaLectura = new Promise(
    (resolve, reject) => {
        fs.readFile('people.json', 'utf8',
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
        ////////////////////////////////GENERO////////////////////////////////////
        gender = jsonData
            .map(
                persona => persona.gender
            ).unique()


        console.log('gender:  ', gender)
        ///////////////////////////////EYE COLOR/////////////////////////////////////
        eyeColor = jsonData
            .map(
                persona => persona.eye_color
            ).unique()
        console.log('Eye Color:  ', eyeColor)
        ///////////////////////////////SKIN COLOR/////////////////////////////////////
        skinColor = jsonData
            .map(
                persona => persona.skin_color
            ).unique()
        console.log('Skin Color:  ', skinColor)
        ///////////////////////////////HAIR COLOR/////////////////////////////////////
        hairColor = jsonData
            .map(
                persona => persona.hair_color
            ).unique()
        console.log('Hair Color:  ', hairColor)

        /////////////////////////////////ARREGLOS GENERO////////////////////////////////////////////
        for (let i = 0; i < gender.length; i++) {
            let array = eyeColor[i]

            let $array = []
            jsonData.map(per => {

                if (per.gender === gender[i]) {

                    $array.push(per)
                }
            })
            console.log('Gender :  ', gender[i], $array)
        }

        /////////////////////////////////ARREGLOS EYE COLOR////////////////////////////////////////////


        for (let i = 0; i < eyeColor.length; i++) {
            let array = eyeColor[i]

            let $array = []
            jsonData.map(per => {

                if (per.eye_color === eyeColor[i]) {

                    $array.push(per)
                }
            })
            console.log('Eye color:  ', eyeColor[i], $array)

        }


        /////////////////////////////////ARREGLOS SKIN COLOR////////////////////////////////////////////
        for (let i = 0; i < skinColor.length; i++) {
            let array = skinColor[i]

            let $array = []
            jsonData.map(per => {

                if (per.skin_color === skinColor[i]) {

                    $array.push(per)
                }
            })
            console.log('Skin color:  ', skinColor[i], $array)

        }
/////////////////////////////////ARREGLOS HAIR COLOR////////////////////////////////////////////

        for (let i = 0; i < hairColor.length; i++) {
            let array = hairColor[i]

            let $array = []
            jsonData.map(per => {

                if (per.hair_color === hairColor[i]) {

                    $array.push(per)
                }
            })
            console.log('Hair color:  ', hairColor[i], $array)

        }


        /////////////////////////////////////////ABECEDARIO///////////////////////////////////////

        for (let i = 0; i < abc.length; i++) {
            jsonData.some(per => {
                if (per.name.startsWith(abc[i])) {
                    abcRes[i] = '' + abc[i] + ':' + true;

                }

            })


        }
        console.log('resultado Abecedario: ', abcRes)

//////////////////////////////////////////SUMATORIA///////////////////////////////////////////////77
        jsonData.map(per => {

            var text = per.mass
            var integer = parseInt(text, 10);

            var text2 = per.height
            var integer2 = parseInt(text2, 10)
            if (!isNaN(integer)) {
                sumaMass += integer
            }

            if (!isNaN(integer)) {
                sumaHeight += integer2
            }
        })

        let res_sumatoria = [{'Mass': sumaMass}, {'Height': sumaHeight}]
        console.log('Resultado Sumatoria: ', res_sumatoria)

///////////////////////////////////////VEHICULOS Y STARSHIPS///////////////////////////////////77
        let resVehicles = jsonData.every(per => {
            per.vehicles.length > 0
        })
        console.log('Todos los personajes han usado vehicles: ', resVehicles)


        let resStarships = jsonData.every(per => {
            per.starships.length > 0
        })
        console.log('Todos los personajes han usado starships: ', resStarships)
/////////////////////////////////////////CANTIDAD DE PELICULAS/////////////////////////////////////

        jsonData.map(per =>
            resFilms.push('' + per.name + ':' + per.films.length))

        console.log(resFilms)


    })
    .catch((error) => {
        console.log('error', error), console.log(jsonData)
    })


Array.prototype.unique = function (a) {
    return function () {
        return this.filter(a)
    }
}(function (a, b, c) {
    return c.indexOf(a, b + 1) < 0
});












