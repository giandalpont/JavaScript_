/*
    TRUTHY e FALSY
    TRUTHU: Todos os valores que é convertiso para BOOLEAN que representado por TRUE.
    FALSY: Todos aquele valor que é  convertiso para BOOLEAN que representado por FALSE.
*/


console.log(1 === 'd')  //false

console.log(1) // 1

var test

if( 1 ){ teste = true } else{ teste = false  }
console.log(teste) // true

if( 0 ){ teste =  true } else{  teste = false }
console.log(teste) // false

/*
    FALSY 
    - undefined     - 0
    - null          - -0
    - NaN           - "" ou ''

*/

if( '' ){ teste =  true } else{  teste = false }
console.log(teste) // false
 
if( '0' ){ teste = true } else{ teste = false }
console.log(teste)  // true

if( 'Gian' ){ teste = true} else{ teste = false}
console.log(teste) // true 

if( undefined ){ teste = true } else{ teste = false }
console.log( teste)  // false 

if( null ){ teste = true } else{ teste = false }
console.log( teste)  // false 

if( {} ){ teste = true } else{ teste = false }
console.log( teste)  // true 

if( [] ){ teste = true } else{ teste = false }
console.log( teste)  // true 

if( NaN ){ teste = true } else{ teste = false }
console.log( teste)  // false 

if( -0 ){ teste = true } else{ teste = false }
console.log( teste)  // false 

if( false  ){ teste = true } else{ teste = false }
console.log( teste)  // false 

/* ------------------------------------------------------------------ */ 
/*
    !! : Descobrendo a resposta BOOLEANA 
*/
console.log(' !! : Descobrendo a resposta BOOLEANA  ')

console.log(!true)  // false

console.log(!1)  // false

console.log(!!true)  // true

console.log(!!1)  // true

console.log(!!0)  // false

console.log(!!'Gian')  // true 

console.log(!!'')  // false 
 
console.log(!!NaN)  // false 

/* ------------------------------------------------------------------ */ 
/*
    Condocional Ternário
    condição ? true : false
    Subistitui o if 
*/
console.log('Condocional Ternário')

console.log(1 === 2 ? true : false) // false
if( 1 ===2  ){ true} else{ false }

var pessoa = { sexo: 'Macolino' }
// var pessoa = { sexo: 'Femenino' }

var sexo = 'o'

if(pessoa.sexo === 'Femenino' ){  sexo = 'a' }

console.log(sexo)

var pessoa = { sexo: 'Femenino' }
// var pessoa = { sexo: 'Macolino' }
var sexo = pessoa.sexo === 'Femenino' ? 'a' : 'o'
console.log(sexo) // a

1 ? true : false

/* ------------------------------------------------------------------ */ 
/*
    Escopo de Variáves
    Escopo: É o local aonde você declara uma variavel

    GLOBAL E LOCAL
*/
console.log('Escopo de Variáves')

/*  Escopo GLOBAL  */
var myvar = 1  
console.log(myvar) // 1  

 function myFunction() {
    return myvar
}
console.log(myFunction()) // 1

/*  Escopo LOCAL  */
function otherFunction(){
    var otherVar = true
    return otherVar
}
// otherFunction()
console.log(otherFunction())

// otherVar
// console.logotherVar)

/* 
    IMPORTANTE 
    SEMPRE USAR VAR
*/

newFunc= ()=>{
    newVar = 'Variavel global'
    return newVar
}
newFunc()
newVar
console.log(newVar)
 