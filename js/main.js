let nombre = prompt("Ingrese su nombre:");
let apellido = prompt("Ingrese su apellido:");
const añoNacimiento = parseInt(prompt("Ingrese su año de nacimiento:"));
const añoActual = 2026;

console.log("Nombre completo: " + nombre + " " + apellido);

console.log("Edad: " + (añoActual - añoNacimiento));
