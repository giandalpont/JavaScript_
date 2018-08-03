/*
    Funções ++
    SEMPRE NOMEAR AS FUNÇÕES

    ERRADO   
    var func = function (){
        //
    };

    CERTO
    var func = function func() {
        // 
    };
*/


var func = function(){
    return 'Olá!'
}
console.log(func())     // Olá!
console.log(func.name)  // func    como fução não tem nome traz o nome da variavel 

var func = function myFunc(){
    return 'Olá!'
}
console.log(func())     // Olá!
console.log(func.name)  // myFunc

/*--------------------------------------------------------------*/
/*
    Functional Programming 

    objeto de primeira classe | cidaãos de primeita classa

    {}  <3   function (){}   
    O que você faz com objetos, também consegue fazer com funções

    Como você usa objeto litarais...
    var car = {
        marca: 'BMW,
        modelo: 'M3'
    }; 

    Pode criar funções literais
    function sum( x, y ){ 
        return x + y;
    }
*/

//Como você retorna objeto em uma função...
var func = function func(){
    return {
        marca: 'BMW',
        modelo: 'M3'
    }
}
console.log( func() )   // { brand: 'BMW', modelo: 'M3' }

var func = function func(){
    var info = {
        name: 'Gian',
        lastName: 'Dal Pont'
    };
    return info
}
console.log( func() )   // { name: 'Gian', lastName: 'Dal Pont' }
console.log( func().name )  // Gian 
console.log( func().lastName )  // Dal Pont

// Voçê tabém pode retorna funções
function adder(x){
    return function(y) {
        return x + y;
    }
}
console.log( adder(3)(8))    // 11
var add = adder(4);
console.log( add(3))    // 7
console.log( add(8))    // 12


function adder2(x){
    function addOther(y) {
        return x + y;
    }
    return addOther;
}
console.log( adder(3)(3))   // 6

var add2 = adder(2);

console.log( add2(3))   // 5
console.log( add2(8))   // 10

// Como voçê passa objetos por parametro 
var car = {
    color: 'Blue'
}
function getCarColoer(mycar){
    return mycar.color;
}
console.log( getCarColoer(car) )    // Blue 

// Como voçê pode passar função por parametro
function showOtherFunction (func){
    return func();
}

// showOtherFunction(function() { 
//     return 'Function';
// });
console.log( showOtherFunction(()=> {return 'Function'}) )

function show2(){
    return 'Gian Dal Pont'
}
console.log( showOtherFunction(show2) )    // Gian Dal Pont 
