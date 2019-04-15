//crear arreglos

//1
var arreglo = new Array('item1', 'item2')
console.log(arreglo)

//2
var arreglo_2 = Array('itemA', 'itemB')
console.log(arreglo_2)

//3
var arreglo_3 = ['itemX', 'itemY']
console.log(arreglo_3)

//crear arreglos sin elementos
var arreglo_4 = new Array()
var arreglo_5 = Array()

console.log('Arreglo4: ', arreglo_4)
console.log('Arreglo5: ', arreglo_5)


var mi_arreglo = []

mi_arreglo = ['israel', 'israel@epn.edu.ec', 7, ['ADSOR', 'linux', 'web']]
console.log(mi_arreglo)


mi_arreglo.push('Perez')
console.log(mi_arreglo)

mi_arreglo.pop()
console.log(mi_arreglo)


var num = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(num)

num.splice(1, 1)// desde la posicion 1 eliminar 1
console.log(num)


var indice = num.indexOf(4)
console.log(indice)


var pets = ['perro', 'gato', 'raton']

for (var i = 0; i < pets.length; i++) {
    console.log(pets[i])
}


pets.forEach(function (element) {
    console.log(element)
})


var lista = pets.join("-")
console.log(lista)

pets = pets.concat('loro')

console.log(pets)

var inicio=pets.shift()
console.log('shitf: ',inicio)

console.log(pets)


var removerinicio=pets.unshift()
console.log('unshift: ',removerinicio)

var reverse= pets.reverse()
console.log(reverse)

var petsordenado= pets.sort()
console.log(petsordenado)


var petsMap=pets.map(function (item) {
    return item.toUpperCase()})

console.log(petsMap)



var arreglo_5=[1,'a',2,'b',3,'c']

var arreglo_6=arreglo_5.filter(function(item){
    return typeof item=='number'
})
console.log(arreglo_6)


function esNumero(value){
    return typeof value=='number';
}

console.log(arreglo_5.every(esNumero))
console.log(arreglo_5.some(esNumero))



var datos={
    nombre:'israel',
    cedula: 123134321,
    semestre: 7
}

var mas_datos={
    apellido:'Perez',
    num_unico:34567
}


var datos_completos={

    ...datos,
    ...mas_datos
}


console.log(datos_completos)

var atributos_Datos=Object.keys(datos_completos)
console.log(atributos_Datos)