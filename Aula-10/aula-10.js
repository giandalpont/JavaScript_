/*
    WRAPPER OBJETS
    Valores primitivos não são objetos ( 1 , 'String', true, false, null, undefined)
*/

var name = 'Gian';
console.log( name.length )  // 4 
console.log( name )


/*
    Construtores ( Criam novos objetos )
*/

var name = new String('Gian');
console.log( name )
console.log( name.valueOf() )
console.log( name.length )  // 4 

var age = new Number(22);
console.log( age )
console.log( age.valueOf() )

var ninja = new Boolean(true);
console.log( ninja )
console.log( ninja.valueOf() )


/*
    Conversores - sem o NEW ( conversores de tipos  )
*/
console.log( 'Sem NEW' )

var myVar = String(10);
console.log( myVar )

var age = Number('22');
console.log( age + 3 )

var ninja = Boolean(1);     // !!
console.log( ninja )

var ninja = Boolean(0);     // !!
console.log( ninja )

var ninja = Boolean({});   // !!
console.log( ninja )

/*
    Como testa TIPOS de valores?

    typeOf <operand>

    Qualquer outro objetos que não seja function => 'object'
    typeOf {};   // object
    typeOf [];   // object
    typeOf null; // object   // Erro na implementação JS

*/

console.log( typeof 10 ) // nunmber 
console.log( typeof NaN )   // number
console.log( typeof 'gian' ) // string
console.log( typeof undefined ) // undefined
console.log( typeof true ) // boolean
console.log( typeof function(){} ) // function
console.log( typeof {} ) // object
console.log( typeof [] ) // object
console.log( typeof null ) // object

/*
    Posso confiar em TYPEOF?
    Somente pasa valores primitivos
*/
console.log('sum')
function sum( n1, n2) {
    return n1 + n2;
}
console.log( sum( 2, 3 ) )
console.log( sum( 2, 'JS' ) )
console.log( sum( {}, [] ) )


console.log('subtract')
function subtract( n1, n2) {
    return n1 - n2;
}
console.log( subtract( 2, 3 ) )
console.log( subtract( 2, 'JS' ) )
console.log( subtract( {}, [] ) )


console.log('sum2')
function sum2( n1, n2) {
    if( typeof n1 === 'number' && typeof n2 === 'number' ){
        return n1 + n2;
    }
    return 'Entre com dois números '
}
console.log( sum2( 2, 3 ) )
console.log( sum2( 2, 'JS' ) )
console.log( sum2( {}, [] ) )


console.log('subtract2')
function subtract2( n1, n2) {
    if( typeof n1 === 'number' && typeof n2 === 'number' ){
        return n1 - n2;
    }
    return 'Entre com dois números '    
}
console.log( subtract2( 2, 3 ) )
console.log( subtract2( 2, 'JS' ) )
console.log( subtract2( {}, [] ) )


console.log('subtract3')
function subtract3( n1, n2) {
    if( n1 === null ){
        return 'Não entre com vlores nulo';
    }
    return n1 + n2; 
}
console.log( subtract3( 3, 3 ) )
console.log( subtract3( null, 2 ) )

