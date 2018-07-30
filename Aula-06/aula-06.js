/*--------------------------------> AULA-06 <-----------------------------*/

/*
    Operador Vírgula

    var a, b = 2, c;

    function myFunc (){
        ver x = 0;
        return ( x += 1, x );
        // return ++x; 
    }

*/
 
function myFunc(){
    var a = 1, b = 2, c= 3;
    var x = 4; y = 5, z= 6;  // y e z são variaveis globais  ; 
    
    return [a ,b ,c]
}
console.log(myFunc()) 
// console.log(y)s
// console.log(z)

function myFunc1 (){
    var x = 0;
    return ( x += 1, x ) 
}
console.log(myFunc1())

function myFunc2 (){
    var x = 0;
    return ++x
}
console.log(myFunc2())

/*----------------------------------------------------------------*/
/*
    Estruturas Condicionais   SWITCH
*/
function myFunc3(x){
    switch(x) {
        case 1:
        console.log('x é 1!');
        break;
        case 2:
        console.log(' x é 2! ');
        break;
        default:
        console.log('x não é 1 e nem 2');
    }
}
console.log('SWITCH')
console.log(myFunc3())
console.log(myFunc3(2))
console.log(myFunc3(1))

// Mesma coisa que 
function myFunc4(x) {
    if( x ===1 ){
        return 'x é 1!'
    }
    else if( x === 2 ){
        return 'x é 2!'
    } 
    else {
        return 'x não é 1 e nem 2'
    }
}
console.log('IF')
console.log(myFunc4())
console.log(myFunc4(2))
console.log(myFunc4(1))
