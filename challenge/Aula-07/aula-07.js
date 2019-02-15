/*
    Operador módular   %
    retesto da divisão (inteiro )
    3 / 3 = 1
    3 % 3 = 0
    5 % 2 = 0 
*/

console.log( 3 / 3 )    // 1
console.log( 3 % 3 )    // 0
console.log( 5 % 2 )    // 1   
console.log( 4 % 2 )    // 0

var num = 0 ;
 while( num <= 20 ){
    console.log(num++);
}

console.log( 'Num impar' )
num = 0;
while( num <= 20 ){
    (num++) % 2 === 0 ? console.log(num) : ''
} 

console.log( 'Num pares' )
num = 0;
while( num <= 20 ){
    num % 2 === 0 ? console.log(num) : ''
    num++
} 

/*--------------------------------------------------------------*/
/*
    Arrays
    Propriedade LENGTH:  Conta a quantidade de itens do array 
*/

var arr = [
    'gian',
    null,
    ()=> {},
    { bola: 'Azul' },
    [ 1, 4, 7, 0 ] 
]
console.log( arr.length )  // 5

var qtd = arr.length;
while( qtd > 0 ){
    console.log( arr[ qtd-- ] )
}

console.log( '  ' )
var qtd = arr.length;
while( qtd > 0 ){
    console.log( arr[ --qtd ] )
}
/*
    [ 1, 4, 7, 0 ]
    { bola: 'Azul' }
    [Function]
    null
    gian
*/

console.log( ' ' )
var qtd = arr.length;
while( qtd > 0 ){
    console.log( arr[ --qtd ] );
    if( qtd === 3 ){
        console.log( arr[ qtd ].bola )
    }
}

/*--------------------------------------------------------------*/
/*
    Array
    .push() : Para aditionar um item no final do array
*/

var arr = [
    'gian',
    null,
    2,
    { bola: 'Azul' },
    [ 1, 4, 7, 0 ] 
]
console.log( arr )  /* [ 'gian', null, 2, { bola: 'Azul' }, [ 1, 4, 7, 0 ] ] */ 

console.log( arr.push( 'Dal Pont' , [ 'la1', 'la2', 'la3' ] ))    // 7

console.log( arr )
/*
2,
{ bola: 'Azul' },
[ 1, 4, 7, 0 ],
'Dal Pont',
[ 'la1', 'la2', 'la3' ] ]
*/

console.log( arr[6][1] )    // la2 
console.log( arr.push( function soma(x , y) { return x + y} ) ) // 8
console.log( arr[7]( 5, 5) )    // 10 

console.log( arr )
/*
    [ 'gian',
    null,
    2,
    { bola: 'Azul' },
    [ 1, 4, 7, 0 ],
    'Dal Pont',
    [ 'la1', 'la2', 'la3' ],
    [Function: soma] ]
*/

/*--------------------------------------------------------------*/
/*
    Estrutura de repetição (loop ) FOR
    for( int, condition, final-expres sion )
*/
console.log( 'FOR' )

for( var num = 0; num < 20; num++ ){
    console.log(num)
}

for( var num = 1, num1 = 2; num < 7; num++ ){
    console.log(  num )
    console.log( num1++ )
}
