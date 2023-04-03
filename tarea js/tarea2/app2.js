// // Solicitar sueldo base y valor de ventas al usuario
// let sueldoBase = prompt("Ingrese su sueldo base:");
// let venta1 = prompt("Ingrese el valor de la venta 1:");
// let venta2 = prompt("Ingrese el valor de la venta 2:");
// let venta3 = prompt("Ingrese el valor de la venta 3:");

// // Calcular la comisión de cada venta y el total de comisiones
// let comision1 = venta1 >= 2000 ? venta1 * 0.2 : venta1 * 0.1;
// let comision2 = venta2 >= 2000 ? venta2 * 0.2 : venta2 * 0.1;
// let comision3 = venta3 >= 2000 ? venta3 * 0.2 : venta3 * 0.1;
// let totalComisiones = comision1 + comision2 + comision3;

// // Calcular el total a pagar
// let totalAPagar = parseFloat(sueldoBase) + totalComisiones;

// // Mostrar los resultados al usuario
// document.write(`Sueldo Base: $${sueldoBase}`);
// document.write(`Comisión Venta 1: $${comision1.toFixed(2)}\n`);
// document.write(`Comisión Venta 2: $${comision2.toFixed(2)}\n`);
// document.write(`Comisión Venta 3: $${comision3.toFixed(2)}\n`);
// document.write(`Total a Pagar: $${totalAPagar.toFixed(2)}`);


// Solicitar sueldo base y valor de ventas al usuario
let sueldoBase, ventas = [];
do {
  sueldoBase = parseFloat(prompt("Ingrese su sueldo base:"));
} while (isNaN(sueldoBase));

for (let i = 0; i < 3; i++) {
  let venta;
  do {
    venta = parseFloat(prompt(`Ingrese el valor de la venta ${i+1}:`));
  } while (isNaN(venta));
  ventas.push(venta);
}


// Calcular la comisión de cada venta y el total de comisiones
let comisiones = [];
let totalComisiones = 0;
for (let i = 0; i < ventas.length; i++) {
  const venta = ventas[i];
  const comision = venta >= 2000 ? venta * 0.2 : venta * 0.1;
  comisiones.push(comision);
  totalComisiones += comision;
}

// Calcular el total a pagar
const totalAPagar = sueldoBase + totalComisiones;

// Mostrar los resultados al usuario
document.write(`Sueldo Base: $${sueldoBase}\n`);
for (let i = 0; i < comisiones.length; i++) {
    document.write(`Comisión Venta ${i + 1}: $${comisiones[i].toFixed(2)}\n`);
}
document.write(`Total a Pagar: $${totalAPagar.toFixed(2)}`);




let dia = 3;
let nombreDia;

switch (dia) {
  case 1:
    nombreDia = "Lunes";
    break;
  case 2:
    nombreDia = "Martes";
    break;
  case 3:
    nombreDia = "Miércoles";
    break;
  case 4:
    nombreDia = "Jueves";
    break;
  case 5:
    nombreDia = "Viernes";
    break;
  case 6:
    nombreDia = "Sábado";
    break;
  case 7:
    nombreDia = "Domingo";
    break;
  default:
    nombreDia = "Día no válido";
}

console.log(`El día ${dia} es ${nombreDia}.`);

