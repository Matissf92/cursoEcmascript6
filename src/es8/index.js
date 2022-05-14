//como devolver la clave y los valores de una matriz
const data = 
{
    frontend: 'Matías',
    backend: 'Mireia',
    design: 'Victor',
};

const entries = Object.entries(data);
console.log(entries); //nos devuelve los elementos definidos en la matriz
console.log(entries.length); //nos devuelve el total de elementos 

const data2 = 
{
    frontend: 'Matías',
    backend: 'Mireia',
    design: 'Victor',
};

const values = Object.values(data2);
console.log(values);//nos devuelve los valores de un objeto a un array
console.log(values.length);//nos devuelve el total de elementos 

const string = 'hello';
console.log(string.padStart(7, 'hi'));//agregar una cadena de elementos al principio de un string, si nuestro string original tiene 5 caracteres ponemos 7 porque añadiremos 2 más
console.log(string.padEnd(12, '------'));//agregar una cadena de elementos al final de un string, si nuestro string original tiene 5 caracteres ponemos X números en función del total de elementos que queramos concatenar
console.log('food'.padEnd(12,' ----'));

//async y await
const helloWorld = () =>
{
    return new Promise ((resolve, reject) =>
    {
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'));
    })
};

const helloAsync = async () =>
{
    const hello = await helloWorld();
    console.log(hello);
};

helloAsync();

const anotherFunction = async () =>
{
    try 
    {
        const hello = await helloWorld();
        console.log(hello);    
    } catch (error) 
    {
        console.log(error);    
    }
};

anotherFunction();