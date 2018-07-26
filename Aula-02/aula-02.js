/*   Operadores de comparação e lógicos são usados ​​para testar true ou false 
    && (END): Combinação de dois valores se é TRUE ou FALSE
    || (OR): Pelo memos um tem que ser verdadeiro para ser TRUE
    ! (NOT) Ele nega o valor, se for TRUE retorna FALSE (Realiza uma negação lógica em uma expressão.)
*/ 

var x = 3
var y = 6

console.log('  === : Comparador de igualdade retornando TRUE ou FALSE')
console.log('x === 3)', x === 3)
console.log('y === 5',y === 5)
console.log(`y === "6" (string) ${y === '6'}`)
console.log('y === 6',y === 6)

console.log('  Testando && com x e y')
console.log('  && (AND): Só retorna true se os dois valor for verdadeiro(testando pelo tipo)')
console.log('x === 3 && y === 6 ', x === 3 && y === 6)
console.log('x === 3 && y === 3 ', x === 3 && y === 3)

console.log('|| (OR): Basta um valor ser TRUE para todos ser TRUE')
console.log('x === 3 || y === 3 ', x === 3 || y === 3)
console.log('x === 6 || y === 3', x === 6 || y === 3)

console.log(' ! (NOT): Ele inverte um valor (ele nega o valor), retornando TRUE ou FALSE')
console.log('x === 3', x === 3)
console.log('!x === 3', !x ===3)
console.log('x != 3 (x é diferente de 3)', x != 3)
console.log('verificando pelo tipo')
console.log('x != 3', x != 3)
console.log(`x !== '3' ${x !== '3'}`)
console.log(`x !== 3 ${x !== 3}`)

/*--------------------------------------------------------------------------*/


/*
    Operadores Unários 
    + : Converte o seu operador em tipo numero
    - : Operador de negação, converte o operador em tipo numero, em seguida, nega-lo
*/
console.log(' Operadores Unários')
console.log('4 + 4 :', 4 + 4)
console.log('+3', +3)
console.log(`3 + '3' : ${ 3 + '3'}`)
console.log(`+3 : ${+'3'}`)
console.log(`'GI + 'AN' ${'GI' + 'AN'}`)
console.log(`var x: ${x}`)
console.log(`-x ${-x}`)
console.log(`var x: ${x}`)
console.log(`-'3' ${ -'3'}`)

/*--------------------------------------------------------------------------*/

/*
    Instrução Condicionais
    if: Use if para especificar um bloco de código a ser executado, se uma condição especificada for verdadeira 
    Else: Use else para especificar um bloco de código a ser executado, se a mesma condição for falsa (se não)
    if (condicao) {
        //bloco de código
    }

    if (condicao) {
        //bloco de código 1
    } else {
        //bloco de código 2
    }

    if (condicao 1) {    
        //bloco de código 1
    } else if (condicao 2) {
        //bloco de código 2
    } else {
        //bloco de código 3
    }
*/
console.log(`x:${x} y:${y}`)

if( x === 3 ){
    y = 3
}
console.log(`x:${x} y:${y}`)

if( x === y && x === 3){
    x = 5
    y = 2
} 
console.log(`x:${x} y:${y}`)

if( x === 5 || y === 1 ){
    x = 3
    y = 7
}
console.log(`x:${x} y:${y}`)

if( x === 2){
    x = 5
    y = 5 
}
console.log('Usando IF')
console.log(`x:${x} y:${y}`)


if( x === 2){
    x = 10
} else{
    y = 10
}
console.log('Usando IF e ELSE')
console.log(`x:${x} y:${y}`)

if( x === 2){
    y = 3
}else if( y === 3 ){
    x = 3
} else if( x === y ){
    x = 100
    y = 100
} else{
    x = 0
    y = 0
}
console.log('Usando ELSE IF')
console.log(`x:${x} y:${y}`)