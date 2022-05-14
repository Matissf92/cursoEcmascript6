const obj =
{
    name: 'Matías',
    age: 32,
    country: 'AR'
};

let { name, ...all } = obj; //de esta manera podemos mostrar la variable que nos interesa del objeto
console.log(name, all);

//usar los elementos de propagación por unir los elementos que queramos
const obj2 =
{
    name: 'Matías',
    age: 32,
};

const obj3 =
{
    ...obj2,
    country: 'AR'
};

console.log(obj3);

//promise.finally se usa para saber cuando ha finalizado la llamada y así podemos ejecutar una función o lógica a partir de ahí
const helloWorld = () =>
{
    return new Promise ((resolve, reject) => 
    {
        (true)
            ? setTimeout (() => resolve('Hello World'), 3000) //con esto le decimos que ejecute la función al cabo de 3seg
            : reject(new Error('Test Error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizó'))


//como podemos agrupar bloques del regex y como acceder a ellos
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);