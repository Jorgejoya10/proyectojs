// ● Desarrolla un programa que calcula promedio
// El programa solicita
// ➔ Nombre del alumno
// ➔ Número de calificaciones y valor de cada calificación
// El programa Calcula promedio
// El programa entrega
// ➔ Nombre del alumno
// ➔ Calificaciones individuales
// ➔ Promedio obtenido con base en las calificaciones
// ➔ Texto “Alumno aprobado” o “Alumno No aprobado” con base en el
// resultado obtenido.

// Pedir nombre del alumno
const nombre = prompt("Ingrese el nombre del alumno:");

// Pedir cantidad de calificaciones
const numCalificaciones = parseInt(prompt("Ingrese la cantidad de calificaciones:"));

// Pedir valor de cada calificación y calcular promedio
let sumaCalificaciones = 0;
for (let i = 1; i <= numCalificaciones; i++) {
  const calificacion = parseFloat(prompt(`Ingrese la calificación ${i}:`));
  sumaCalificaciones += calificacion;
}

const promedio = sumaCalificaciones / numCalificaciones;

// Imprimir resultado
document.write(`<h2>Alumno: ${nombre}</h2>`);
document.write(`<p>Calificaciones: ${sumaCalificaciones} / ${numCalificaciones} = ${promedio.toFixed(2)}</p>`);

if (promedio >= 6) {
  document.write("<p>Alumno aprobado</p>");
} else {
  document.write("<p>Alumno no aprobado</p>");
}
