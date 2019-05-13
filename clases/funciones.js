function holaMundo() {
    console.log('hola mundo')
}


holaMundo()


function suma(num1, num2) {
    var esnum1=typeof num1
    var esnum2=typeof num2
    if(esnum1 =='number' && esnum2=='number'){

        return num1 + num2
    }
    else{return ('ingrese numeros')}
}

console.log(suma(3, 'r'))




function sumarnumArreglos(numeros){
    var parametrodistintodenumero=false
    var resultado=0
    for(var i =0; i<numeros.length;i++){
        var esNumero= typeof numeros[i];
        if(esNumero=='number'){
            resultado+=numeros[i]
        }
        else return ('no todos los elementos son numeros')
    }
    return resultado

}

var num=[1,2,3,4,'f']

console.log(sumarnumArreglos(num))