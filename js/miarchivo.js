// Ejemplo con un bucle for y una instrucción condicional if

// Pedir un número mediante prompt y sumarle otro número en cada repetición
let numero = parseInt(prompt('Ingrese un número:'));
for (let i = 1; i <= 5; i++) {
  numero += 2; // Sumarle 2 en cada repetición
  console.log('Resultado:', numero);
}

// Pedir un texto mediante prompt, concatenar un valor en cada repetición
let texto = '';
let input;
while (input !== 'ESC') {
  input = prompt('Ingrese un texto ("ESC" para salir):');
  texto += input + ' ';
  console.log('Texto concatenado:', texto);
}

// Pedir un número por prompt, repetir la salida del mensaje "Hola" la cantidad de veces ingresada
let cantidad = parseInt(prompt('Ingrese la cantidad de veces que desea repetir "Hola":'));
for (let i = 1; i <= cantidad; i++) {
  console.log('Hola');
}
