//dynamic import 
const button = document.getElementById("btn");

button.addEventListener('click', async function()
{
    const module = await import("./file.js");
    module.hello();
});



const aBigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);


//nos devuelve una promesa después de que todas las promesas se hayan cumplido o rechazado
const promise1 = new Promise((resolve, reject) => reject('reject'));
const promise2 = new Promise((resolve, reject) => resolve('resolve'));
const promise3 = new Promise((resolve, reject) => resolve('resolve1'));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response))


console.log(window);
console.log(globalThis);


const fooo = null ?? 'default string';
console.log(fooo);

//añadimos el ? en un elemento de un objeto o array para que, si lo que estamos queriendo mostrar no exista, no se rompa el código 
//de esta manera nos devolverá un undefined y el código puede seguir funcionando
const user = {};
console.log(user?.profile?.email);

if(user?.profile?.email)
{
    console.log('email');
}
else 
{
    console.log('fail');
}
