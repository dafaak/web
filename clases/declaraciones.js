//declaraciones

var nombre;
var Nombre;

//var: declara una variable con o sin valor
//let: variable de tipo local con o sin valor
//const: constante de solo lectura en un bloque

nombre = 'Israel'
Nombre = 'israel'
console.log(nombre)
console.log(Nombre)

let y = 12
console.log(y)

var a;
//undefined
console.log(a)



var edad = 35 //number
var sueldo= 349.3//number
var apellido='Espinel'//string
var soltero=true//boolean
var hijos= null//object
var fecha= new Date()//object
 console.log('Fecha:',fecha)



var estudiante={
    'nombre':'Jose',
    'edad': 35,
    'sueldo': 234.2,
    'soltero': true,
    'apellido': 'Espinosa',
    materias:{
        'basica':'Algebra',
        'carrera': 'Progra'
    }

}
console.log(estudiante)
console.log(typeof(estudiante.materias))
 