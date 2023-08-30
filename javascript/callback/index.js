// Un callback es una funcion que se ejecuta despues de que otra funcion termina de ejecutarse

// Ejemplo 1

const sum = (num1, num2, callback) => {
  const result = num1 + num2;
  callback(`El resultado es ${result}`);
}

const printMessage = (message) => {
  console.log(message);
}

sum(5, 3, printMessage);