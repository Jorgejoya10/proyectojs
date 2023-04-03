//Declaramos las variables

let nombre = prompt("Ingrese su nombre.") ;
let peso = parseInt(prompt("Ingrese su peso (kg)"));
let altura = parseFloat(prompt("Ingrese su altura (m)"));



// Caculamos el indice de masa corporal
document.write('Nombre: ' + nombre +'</br>');
document.write('Tu peso es de: ' + peso + 'kg' + '</br>');
document.write('Tu altura es de: ' + altura + 'm' +'</br>');

let imc = (peso)/(altura**2);
document.write('Tu indice de masa corporal es: ' + imc.toFixed(2) + '</br>');

// De forma adicional se ofrece recomendación:
// ➔ Si IMC > 25 Peso Alto, haga dieta y ejercicio
// ➔ Si IMC se encuentra de 22 a 25 Peso Correcto
// ➔ Si IMC < 22 Peso Bajo, coma más

if (imc > 25){
    document.write("Peso alto. ¡Debes ejercitarte más!");
}else if (imc >= 22 && imc <= 25) {
    document.write("Estas perfecto!");
}else{
    document.write("Peso bajo. ¡Debes aumentar tu masa corporal!");
}
