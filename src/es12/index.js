const string = 'Js es maravilloso, con Js puedo crear el futuro de la web';
const replacedString = string.replace('Js', 'Python');
console.log(replacedString);

//const replacedString2 = string.replaceAll('Js', 'Python');
//console.log(replacedString2);
const replacedString2 = string.replace(/Js/g, 'Python');
console.log(replacedString2);
//estas 2 versiones son las mismas, la de arriba es con la última versión de node.js

class Message
{
    #show(val)//añadiendo el # hacemos que el mensaje sea privado y nos devuelve que la función no existe
    {
        console.log(val);
    };
}

const message = new Message();
message.show('Hola');


const promise1 = new Promise((resolve, reject) => reject('1'));
const promise2 = new Promise((resolve, reject) => resolve('2'));
const promise3 = new Promise((resolve, reject) => resolve('3'));

Promise.any([promise1, promise2, promise3]) //me da error
    .then(response => console.log(response))



class anyClass 
{
    constructor(element)
    {
        this.ref = new WeakRef(element)
    }
}


let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue2 = true;
let isFalse2 = false;
console.log(isTrue ||= isFalse);

let isTrue3 = undefined;
let isFalse3 = false;
console.log(isTrue ??= isFalse);