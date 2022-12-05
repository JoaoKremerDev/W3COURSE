// Métodos de arrays

const array = ["João", "Maria", "Márcia", "Max", "Mariana", "Ludmila", "Fabiano", "Andressa"]; //Minha array

//toString()  //converter para string
console.log(array.toString())

//join() // converter para string porém escolho qual será o separador
console.log(array.join(" - "))

//pop() // remover o último elemento da matríz
console.log(array.pop()) //Andressa < retornando
console.log(array)// array sem "Andressa"

console.log(array.push("Andressa")) //Andressa foi adicionado novamente
console.log(array) // retorna o array completo com o "Andressa" adicionado

//const array = ["João", "Maria", "Márcia", "Max", "Mariana", "Ludmila", "Fabiano", "Andressa"]; //Minha array

console.log(array.shift()) // Retorna "João" e o remove da array
console.log(array) // array inteira sem o "João"

console.log(array.unshift('Coca-Cola')); //adiciona a string "Coca-cola"
console.log(array)  // Coca-cola é o novo elemento de index 0

//acessamos uma matriz a partir do seu número de índice [0] [1] [2]

console.log(array[0]) //Coca-cola
console.log(array[array.length - 1])// Andressa (última string da Array)

//Para descobrir o comprimento da matríz nós usamos length

console.log(array.length)//retorna 8
console.log(array.unshift('José')) // novo elemento de indíce 0 é josé e agora array.length estará retornando 9
console.log(array.length)//9

// também podemos deletar itens da matríz usando a propriedade Delete < Mas é melhor usarmos pop ou shift
// para não deixarmos espaços vazios na matríz

console.log(delete array[0]) // deletamos josé da matríz
console.log(array)// indíce 0 = empty

//concat
// para esse exemplo eu irei criar uma nova array de números:
const numbers = [1,2,3,4,5];
//agora iremos concatenar as duas arrays com o método acima;

const newArray = array.concat(numbers)
console.log(newArray)// retorna todas as strings da array (array) seguido de todos os números da array (number)/


//usando splice para adicionar novos elementos na matríz

const fruits = ['bananas', 'maçãs', 'laranjas'];
// exemplo: fruits.splice(2, 0, "limão", "manga")
// o primeiro parâmetro define a posição a partir de onde os novos elementos serão adicionados
// o segundo parâmetro define quantos elementos serão removidos;
// o restante diz quais elementos serão adicionados

// exemplo:
fruits.splice(1, 1, "limão", "manga") // a partir do índice 1 (maçã) / remova 1/ (maçã foi removido)
console.log(fruits) // ['bananas', 'limão', 'manga', 'laranjas']
// Se fosse (fruits.splice(1, 2 "limão" , "manga")) iriamos ter ['bananas', 'limão', 'manga']

// também podemos usar o método splice para remover elementos sem deixar buracos na array;
//exemplo:

fruits.splice(0, 1) // a partir do índice 0 ('bananas') remova 1 // bananas foi removido
console.log(fruits) // ['limão', 'manga', 'laranjas']



// MÉTODO SLICE 
// serve para dividir um pedaço de uma matríz em uma nova matríz

//exemplo
const fruits2 = ['bananas', 'maçãs', 'laranjas'];
console.log(fruits2.slice(1))// retorna uma nova array  ['maçãs', 'laranjas'];
// ele cria uma nova matríz mas não remove nenhum elemento da matríz de origem;

console.log(fruits2.slice(0, 2))// vai retornar ['bananas', 'maçãs'] pois o parãmetro final não é incluído
console.log(fruits2.slice(1))// retorna tudo a partir do índice 1 ['maçãs', 'laranjas']
 
//MÉTODO SORT
//Sorteando uma array

const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits3.sort())// apple, banana, mango, orange
// trabalhando o sort com números (precisamos passar uma função para ordená-los como quisermos)


const numeros = [1,3,5,3,18,20,100,88,54,32,24,11,12,13,39,29]

console.log(numeros.sort(function(a, b){
    return a - b
})) // retorna [1, 3, 3, 5, 11, 12, 13, 18, 20, 24, 29, 32, 39, 54, 88, 100]
console.log(numeros.sort(function(a, b){
    return b - a
}))// retorna [100, 88, 54, 39, 32, 29, 24, 20, 18, 13, 12, 11, 5, 3, 3, 1]



//MÉTODO REVERSE
// podemos usar para reverter a ordem da array 
console.log(fruits3.reverse())//  ['Orange', 'Mango', 'Banana', 'Apple']


// para acharmos o maior valor ou menor valor de uma array basta colocarmos em ordem crescente ou 
// decrescente com o sort e verificarmos o primeiro ou último índice

// OU PODEMOS USAR TAMBÉM O MATH.MAX OU MATH.MIN

console.log(Math.min.apply(null, numeros)); // retorna o menor valor da array
console.log(Math.max.apply(null, numeros)); // retorna o maior valor da array


// MATRIZES DE OBJETOS

// TAMBÉM PODEMOS RETORNAR O MAIOR VALOR ENTRE MATRIZES DE OBJETOS USANDO A EXPRESSÃO DO SORT
// NAS PROPRIEDADES DO OBJETO
// EXEMPLO:
const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];
// COMO DESCOBRIR QUAL O CARRO MAIS ANTIGO?
cars.sort(function(a, b){return a.year - b.year});
console.log(cars[0].year)// retorna o menor valor da array (de acordo com a expressão acima)
console.log(cars[cars.length -1].year) // retorna o maior valor da array (de acordo com a expressão acima)

// para fazer o sort de string precisamos de uma lógica mais elaborada como a de baixo:
cars.sort(function(a, b){
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });
console.log(cars)
console.log(cars[0].type)// retorna o primeiro elemento do objeto (por ordem alfabética (de acordo com a expressão acima))
console.log(cars[cars.length -1].type)// retorna o último elemento do objeto (por ordem alfabética (de acordo com a expressão acima))
