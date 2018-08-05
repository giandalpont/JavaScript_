/*
    Escopo de função
*/

function myFunction1(){
    function sum() {
        return 1 + 1;
    }
    return sum()
}
console.log( myFunction1() ) // 4
// console.log( sum() ) // SUM IS NOT DEFINED

function myFunction2(){
    var n1 = 2;
    var n2 = 1;
    function sum() {
        return n1 + n2;
    }
    return sum()
}
console.log( myFunction2() ) // 4

function myFunction3(){
    function sum() {
        return n1 + n2;
    }
    var n1 = 1;
    var n2 = 3;
    return sum()
}
console.log( myFunction3() ) // 4

function myFunction4(){
    var n1 = 2;
    var n2 = 3;
    return sum()
    function sum() {
        return n1 + n2;
    }
}
console.log( myFunction4() ) // 4

/*--------------------------------------------------------------------*/
/*
    HOISTING
*/

function myFunction5(){
    var n1 = 2;
    var n2 = 3;
    return sum()
    var func = function sum() {
        return n1 + n2;
    }
}
// console.log( myFunction5() ) // sum is not defined

function myFunction6(){
    console.log('ANTES DE DECLARAR',  n1 )
    var n1 = 7;
    console.log('DEPOIS DE DECLARA', n1)
}
console.log( myFunction6() )

function myFunction7(){
    var n1;
    console.log('ANTES DE DECLARAR',  n1 )
    n1 = 7;
    console.log('DEPOIS DE DECLARA', n1)
}
console.log( myFunction7() )

function myFunction8(){
    console.log(sum())
    function sum() {
        return 4 + 4;
    }
    console.log(sum())
}
console.log( myFunction8() )

function myFunction9(){
    function sum() {
        return 4 + 4;
    }
    console.log(sum())    
    console.log(sum())
}
console.log( myFunction9() )

/*--------------------------------------------------------------------*/
/*
    IIFE
    Immediately-invoked function expression (funão auto executável)
*/

function sum (){
    return 1 + 2;
}
console.log( sum() )

var sum2 = function(){
    return 3 + 2;
};
console.log( sum2() )

var sum3 = function otherSum(){
    console.log( otherSum )
    return 3 + 3;
};
console.log( sum3() )
// console.log( otherSum() ) // otherSum is not defined 

// function(){
    // return 1 + 2;
// }

var obj = {
    prop: ()=>{
        return 1 + 2;
    }
}
console.log( obj )
console.log( obj.prop() )

(function() {
    return console.log(1+3)
}());
