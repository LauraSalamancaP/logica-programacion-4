/*Crear un programa en Javascript que realice lo siguiente:
Debe solicitar al usuario un número por prompt o por input y guardarlo.
Debe imprimir la serie de fibonacci dependiendo del número recibido, es decir, si el programa recibe un 8, debe mostrar 8 números de la serie de Fibonacci.
Debe imprimir el resultado por consola o por el DOM.
Debe ser capaz de identificar si el dato de entrada es de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar el dato.
const numero = prompt("Por favor, ingresa el número para la sere de Fibonacci: ");*/

//Se crea una función que realiza la serie de Fibonacci del número que va a ingresar el usuario
function fibonacci(numero) {
    let numFib = [];
    if (numero === 0) {
        numFib.push(0);
    } else if (numero === 1) {
        numFib.push(0, 1);
    } else {
        numFib.push(0, 1);
        for (let i = 2; i < numero; i++) {
            numFib.push(numFib[i - 2] + numFib[i - 1]);
        }
    }
    return numFib;
}
//Se crea otra función para verificar que el usuario ingrese un número
function verificarNum() {
    let numero = prompt("Por favor, ingresa un número para la serie de Fibonacci:");
    while (isNaN(numero)) {
        numero = prompt("Dato incorrecto. Por favor, ingresa un número. ");
    }
    return parseInt(numero);
}
//Se crea otra función para mostrar los resultados
function serieFibonacci() {
    let numero = verificarNum();
    let serie = fibonacci(numero);
    alert("La serie de Fibonacci para el número ingresado es:" +serie.join(", "));
}

serieFibonacci();