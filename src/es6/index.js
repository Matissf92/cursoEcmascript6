//antes
function newFunction(name, age, country)
{
    var name = ame || 'oscar';
    var age = age || 32;
    var country = country || 'AR'
    console.log(name, age, country);
};

//es6
function newFunction2(name = 'Matías', age = 32, country = 'AR')
{
    console.log(name, age, country);
};

newFunction2();
newFunction2('Ricardo', '23', 'CO');


//antes
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

//es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2)


//antes
let lorem = "Qui consequatur. Commodi. Ipsum vel duis yet minima \n"
+ "otra frase épica que necesitamos"

//es6
let lorem2 = `otra frase épica que necesitamos
ahora es otra frase
`;

console.log(lorem);
console.log(lorem2);


//antes
let person =
{
    'name': 'Matías',
    'age': 32,
    'country': 'AR'
}
console.log(person.name, person.age, person.country);

//ec6
let {name, age, country} = person;
console.log(name, age, country);


//antes
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David', 'Oscar', 'Julian', 'Ricardo', 'Valeria', 'Yesica', 'Camila'];

//ec6
let education2 = ['David', ...team1, ...team2];
console.log(education2);


//antes
var hola = 'hola' //declarando variables con var está disponible de forma global
//ec6
let hola = 'hola' //declarando variables con let está disponible en el scope, es decir, en el bloque de código donde se declare

{
    var globalVar = "Global Var";
}

{
    let globalLet = "Global Let";
    console.log(globalLet);//se hace el console.log dentro de la función porque con let sólo está disponible en el scope
}

console.log(globalVar);
//console.log(globalLet); si pusiésemos este console.log con el let fuera de la función, nos dará error porque no podemos acceder a la variable


//es6
const a = 'b'; //con const asignamos un valor a una variable que no cambiará nucnca
//a = 'a'; si intentamos cambiar el valor a la conts nos daría error
console.log(a);


let name = 'Matías';
let age = 32;

//antes
obj = {name: name, age: age };

//es6
obj2 = {name, age}; 
console.log(obj2);


const names = 
[
    {name: 'Matías', age: 32}
    {name: 'Mireia', age: 28}
]
//antes
let listOfNames = names.map(function (item)
{
    console.log(item.name);
})

//ec6 formas de definir arrow functions
let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) =>
{
    ...
}

const listOfNames4 = name => 
{
    ...
}

const square = num => num * num; //generamos una función por la cual le pasamos un número y lo multiplicamos por sí mismo, de esta forma nos genera un resultado sin tener que generar un return ni nada


//funcionamiento de las promesas de es6
const helloPromise = () =>
{
    return new Promise ((resolve, reject) =>
    {
        if (true)
        {
            resolve('Hey!')
        }
        else 
        {
            reject('Ups!')
        }
    });
}

helloPromise ()
    .then(response => console.log(response))
    .then(() => console.log('hola'))
    .catch(error => console.log(reject));


//declarar clases es6
class calculator
{
    constructor()
    {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB)
    {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

//import & export modules --> esto nos ayuda a importar desde el ejemplo module.js
import {hello} form './module';
hello();


//generators en es6 --> es una función especial que nos retorna una serie de valores según el algoritmo definido
function*helloWorld()
{
    if (true)
    {
        yield 'Hello, ';
    }
    if (true)
    {
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);