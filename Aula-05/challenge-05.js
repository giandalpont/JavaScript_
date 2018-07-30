/*
  # Desafio  #5

Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var varArrQualquer = [
    null, 
    'Dal Pont', 
    undefined, 
    false, 
    'String', 
    5, 
    ()=>{return [1, 2, 3]
    }
]
// console.log(varArrQualquer)

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myArrR (arr){
    return arr
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myArrR(varArrQualquer)[1])

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function myFunPar( arr, ind ){
    return arr[  ind ];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myVerRecebe = [
    3.14, 
    'Full-Stack', 
    [2, 'Gian', null], 
    undefined, 
    ()=> {
        b: 93 
    }
]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFunPar(myVerRecebe , 0))
console.log(myFunPar(myVerRecebe , 1))
console.log(myFunPar(myVerRecebe , 2))
console.log(myFunPar(myVerRecebe , 3))
console.log(myFunPar(myVerRecebe , 4))

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book ( bookNome ){
    var allBooks = {
        'ES6': {
            quantidadePaginas: 248,
            autor: 'Diego Martins de Pinho',
            editora: 'Casa do Código'
        },
        'SQL': {
            quantidade : 491,
            autor: 'Lynn Beighley',
            editora: 'Alta Book'
        },
        'Scrum': {
            quantidadePaginas: 355,
            autor: 'Rafael Sabbagh',
            editora: 'Casa do Código'
        }
    };
    return !bookNome ? allBooks: allBooks[ bookNome ]

};
console.log('   ')
// console.log(book('Scrum'))

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book())

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// var bookN = 'Scrum';
var bookN = 'ES6';
// var bookN = 'SQL';


console.log(`O autor do livro ${bookN} é ${book(bookN).quantidadePaginas} páginas!`)

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro ${bookN} é ${book(bookN).autor}`)

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro ${bookN} foi publicado pela editora ${book(bookN).editora}.`)
