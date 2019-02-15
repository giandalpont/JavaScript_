/*
    Funções : Retorno de funcções além os tipos primitivos 
*/

function myFunction(){
    return 1;
}

function myFunction(){
    return 'Olá';
}

function myFunction(){
    return true;
}

function myFunction(){
    return null;
}

//  Returno da função é um array
function myFunction(){    
    return [1, 2, 3,]; 
}
console.log(myFunction())

// pegando dados function de array
console.log(myFunction()[0]) 
console.log(myFunction()[2]) 
console.log(myFunction()[1]) 
console.log(myFunction()[4])

function myObjto(){
    return {
        prop1: 1,
        prop2: 'Gian',
        prop3: true,
        prop4: null,
        prop5: ()=> {
            return 'prop5';
        }
    }
}
console.log(myObjto())
// Pegando dados da function de objetos
console.log(myObjto().prop2)
console.log(myObjto().prop3)
console.log(myObjto().prop5 )

// Passando uma function com objetos para uma variavel
var values = myObjto();
console.log(' ')
console.log(values)
console.log(values.prop2)
console.log(values.prop5())

/*-------------------------------------------------------------------*/
/*
    Parâmetro de funções Arrays  - []
    Parâmetro de funções Objetos  - {}
    
*/
console.log(' ')
console.log('Parâmetro de funções Arrays - []')
console.log(' ')

var arr = [1, 2, 3,];

// Função returnando objetos 
function myArr(arg){
    return arg;
}
console.log(myArr())
console.log(myArr(arr))

function myArr2(arg){
    return arg[1];
}
console.log(' ')
console.log(myArr(arr))
console.log(myArr2(arr))

console.log(myArr([1, 4, 9, 22]))
console.log(myArr2([1, 4, 9, 22]))

console.log(myArr([true, 'Gian', null, 1===1]))
console.log(myArr2([true, 'Gian', null, 1===1]))

console.log('  Objeto ')
var myObjto2 = {
    prop1: 1,
    prop2: 'Gian',
    prop3: true,
    prop4: null
}
console.log(myArr(myObjto2))
console.log(myArr(myObjto2).prop2)
