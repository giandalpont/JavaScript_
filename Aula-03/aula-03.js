/*
    Tipos
    Tipos Primitivos: NUMBER , STRING, BOOLESN, NULL E UNDEFINED
    Tipos de Ojeto: OBJETO é um conjunto de propriedade recebe nome e valor 
*/


// Objeto
{propriedade: 'valor'} 

// Objeto em JS 
var objeto = { 
    prop1: 'valo',
    prop2: 10,
    prop3: true
} 
console.log('objeto:', objeto)
 
// Acessando valor na propridade de um objeto, as propriedades faz referencia ao objeto
console.log('objeto.prop1:', objeto.prop1)

var pessoa = {
    nome: 'Gian',
    idade: 22,
    peso: 63, 
    altura: 1.73
}
console.log('  ')
console.log('Objeto pessoa:', pessoa)
console.log('pessoa.nome:', pessoa.nome)
console.log('pessoa.idade:', pessoa.idade)
console.log('pessoa.peso:', pessoa.peso)
console.log('Objeto > pessoa. Referencia > altura:', pessoa.altura)

var carro = {
    cor: 'Azul',
    motor: '2.0',
    portas: 4
}
console.log(' ')
console.log('Objeto carro:', carro)


var myVar = ()=> {
    return 'aero function myvar'
}
console.log(' ')
console.log('myvar:', myVar)
console.log('myVar env func:', myVar())

/*
    Conjunto de Objeto
*/
console.log('pessoa', pessoa) 
console.log(' ')

console.log('Atribunto do jeito errado')
console.log(`add : > pessoa = {sexo:'mascolino'} `)
pessoa = {  sexo: 'mascolino' }
console.log('pessoa:', pessoa)

console.log(' ')
 
var pessoa = {
    nome: 'Gian',
    idade: 22,
    peso: 63, 
    altura: 1.73
}
console.log('pessoa:', pessoa) 
console.log(' ')

console.log('Add do jeito certo')

pessoa.cor = 'caucasiano'
console.log('Pessoa:', pessoa)

pessoa.sexo  = 'masculino'
console.log('Pessoa:', pessoa)

console.log('pessoa.cor:', pessoa.cor)
console.log('pessoa.sexo:', pessoa.sexo)
console.log(' ')

// Add um metodo em no objeto 

// pessoa.andar = function(){}
pessoa.andar = ()=>{}

console.log('pessoa:', pessoa)

pessoa.andar = ()=>{
    return 'Pessoa andando'
}

console.log(' ')
console.log('pessoa.andar():', pessoa.andar())

// Criando método aniversario

pessoa.aniversario = ()=> {
    pessoa.idade++
}
console.log(pessoa.idade)
console.log('Aniver', pessoa.aniversario())
console.log(pessoa.idade)
console.log('Aniver', pessoa.aniversario())
console.log(pessoa.idade)
console.log('Objeto pessoa:', pessoa)

// Método nome completo

console.log(' ')
pessoa.sobrenome =  'Dal Pont'

pessoa.nomeCompleto = ()=> {
    return pessoa.nome +' '+ pessoa.sobrenome
}

console.log(pessoa.nomeCompleto())
