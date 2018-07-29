/*
Desafio  #4

Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = (e)=>{
    return e ? true : false
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
console.log(isTruthy(undefined))
console.log(isTruthy(null))
console.log(isTruthy(NaN)) 
console.log(isTruthy(0))
console.log(isTruthy(-0))
console.log(isTruthy(''))
console.log(isTruthy(""))
console.log(isTruthy(false))

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
console.log(isTruthy({}))
console.log(isTruthy([]))
console.log(isTruthy(1234))
console.log(isTruthy('Gian'))
console.log(isTruthy("0"))
console.log(isTruthy(-3))
console.log(isTruthy(+3))
console.log(isTruthy(()=>{}))
console.log(isTruthy(true))
console.log(isTruthy(1===1))
console.log(isTruthy([null,undefined,false, 0]))



/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = {
    marca: 'BMW',
    modelo: 'M3',
    placa: 'BDS 129',
    ano: 2016,
    cor: 'azul',
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = (x)=>{
    carro.cor = x
}
// carro.mudarCor('preto')
// console.log(carro)

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = ()=> {
    return carro.cor
}
// console.log(carro.obterCor())

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = ()=> {
    return carro.modelo
}
// console.log(carro.obterModelo())

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = ()=> {
    return carro.marca
}
// console.log(carro.obterMarca())


/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = ()=> {
    return `Esse carro é um ${carro.obterMarca()} ${carro.obterModelo()}`
}
// console.log(carro.obterMarcaModelo())

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/   
carro.addPessoas = (e)=> {
    var addP =  carro.quantidadePessoas + e;
    var qP = carro.assentos - carro.quantidadePessoas;
    var pluR = qP === 1 ? ' Pessoa' : ' Pessoas';

    if(carro.quantidadePessoas === carro.assentos && addP >=  carro.assentos){
        return 'O carro já esta lotado!'
    }
    if( addP > carro.assentos ){
        return `Só cabe mais ${qP} ${pluR}!`
    }

    carro.quantidadePessoas += e
    return `Já temos ${carro.quantidadePessoas} pessoas no carro!`
}
/*------------*/
// console.log(carro.addPessoas(2))
// console.log(carro.addPessoas(2))
// console.log(carro.addPessoas(2))

console.log(' ')
// console.log(carro)

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.cor  // Azul
// console.log(carro.cor)

// Mude a cor do carro para vermelho.
carro.mudarCor('Vermelho')


// E agora, qual a cor do carro?
carro.cor  // Vermelho
// console.log(carro.cor)

// Mude a cor do carro para verde musgo.
carro.mudarCor('Verde Musgo')

// E agora, qual a cor do carro?
carro.cor  // Verde Musgo
// console.log(carro.cor)

// Qual a marca e modelo do carro?
carro.obterMarcaModelo() // Esse carro é um BMW M3
// console.log(carro.obterMarcaModelo())

// Adicione 2 pessoas no carro.
carro.addPessoas(2) // Agora temos 2 no carro. Só cabe mais 3 pessoas!
// console.log(carro.addPessoas(2))

// Adicione mais 4 pessoas no carro.
carro.addPessoas(4) // Desculpe temos 2 no carro. Só há espaço para mais 3.
// console.log(carro.addPessoas(4))

// Faça o carro encher.
carro.addPessoas(3)  // OK!. Mas o carro lotou agora!
// console.log(carro.addPessoas(3))


// Tire 4 pessoas do carro.
carro.addPessoas(-4)  // Ok. Agora temos 1 pessoa! Ganhamos 
// console.log(carro.addPessoas(-4))

// Adicione 10 pessoas no carro.
carro.addPessoas(10) // Desculpe temos 1 no carro. Só há espaço para mais 4.
// console.log(carro.addPessoas(10))

// Quantas pessoas temos no carro?
carro.quantidadePessoas  // 1
// console.log(carro.quantidadePessoas)
