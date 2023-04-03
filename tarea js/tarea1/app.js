

// Pedir datos al usuario
let nombrePaciente = prompt("Ingrese el nombre del paciente:");
let costoConsulta = parseFloat(prompt("Ingrese el costo de la consulta:"));
let costoHospitalizacion = parseFloat(prompt("Ingrese el costo de hospitalización por día:"));
let costosVarios = parseFloat(prompt("Ingrese los costos varios (análisis, cirugías, etc.):"));
let costoMedicamentos = parseFloat(prompt("Ingrese el costo de los medicamentos:"));
let numDiasHospital = parseInt(prompt("Ingrese el número de días en el hospital:"));
let deduccionSeguro = parseFloat(prompt("Ingrese la deducción del seguro de gastos:"));

// Calcular gastos totales
let gastoHospitalizacion = costoHospitalizacion * numDiasHospital;
let gastosTotales = costoConsulta + gastoHospitalizacion + costosVarios + costoMedicamentos;
let gastosMenosDeduccionSeguro = gastosTotales - deduccionSeguro;
let gastosMenosDeduccionSeguroYMedicamentos =  gastosMenosDeduccionSeguro - costoMedicamentos;

// Mostrar resultados
document.write("Nombre del paciente: " + nombrePaciente + '</br>');
document.write("Gastos totales: $" + gastosTotales.toFixed(2) + '</br>');
document.write("Gastos totales menos deducción del seguro: $" + gastosMenosDeduccionSeguro.toFixed(2) + '</br>');
document.write("Gastos totales menos deducción del seguro y medicamentos: $" + gastosMenosDeduccionSeguroYMedicamentos.toFixed(2) + '</br>');













