let cor = 'vermeldo';

// if(cor === 'verde'){
//     console.log('Siga');
// }else if(cor === 'amarelo'){
//     console.log('Atenção')
// }else if(cor === 'vermelho'){
//     console.log('Pare')
// }

// switch(cor){
//     case('verde'):
//         console.log('Siga')
//         break;
//     case('amarelo'):
//         console.log('Atenção')
//         break;
//     case('vermelho'):
//         console.log('pare')
//         break;
//     default:
//         console.log('Não sei')
// }

let n = 4;

for (let i = 0; i <= 10; i++){
    console.log(`${i} x ${n} = ${i*n}`)
}

function soma(a,b,){
    return a + b;
}
var total =  soma(2,2)
console.log(total)


function soma2(a,b, operador){
    return eval(`${a} ${operador} ${b}`)
}
var total =  soma2(2,3, "*")
console.log(total)

let calc = (a,b,c)=>{
    return eval(`${a} ${c} ${b}`);
}
var total = calc(3,5,"-")
console.log(total)


window.addEventListener('focus', event =>{
    console.log("focus");
})

document.addEventListener('click', event=>{
    console.log("click")
})

let agora = new Date();
console.log(agora.toLocaleDateString("pt-br"))

let arrayCar = ['Ford Mustagui 2019', 'Fiat Uno 2016', 'BMW-X3 2018']
console.log(arrayCar)
console.log(arrayCar.length)
console.log(arrayCar[1])
console.log('Percorendo o array de carros')
arrayCar.forEach((value, index)=>{
    console.log(index, value)
})


//  class
let celuler = function(){
    this.cor = 'azul';
    this.ligar = function(){
        console.log('Ligar')
        return 'Ligando..'
    }
}

let objeto = new celuler();

console.log(objeto.ligar())

class Celular {
    constructor(){
        this.cor = 'yallow';

        this.receber = ()=>{
            console.log('Chamando')
            return 'Atendendo...'
        }
    }
}
let objeto2 = new Celular();
console.log(objeto2.receber());