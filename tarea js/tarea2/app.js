
//Declaramos las variables

let sueldo = parseFloat(prompt("Ingrese su sueldo"));
let venta1 = parseFloat(prompt("Ingrese la venta 1"));
let venta2 = parseFloat(prompt("Ingrese la venta 2"));
let venta3 = parseFloat(prompt("Ingrese la venta 3"));
let total = venta1 + venta2 + venta3;
let comision1 = total * .2; 
let comision2 = total * .1; 



document.write('El sueldo es: $' + sueldo + '</br>');
document.write('El total de venta es: $' + total + '</br>');

let total1 = sueldo + comision1;
let total2 = sueldo + comision2;

if(total >= 2000){
    document.write('Su comision es: $' + comision1.toFixed(2) + '</br>');
    document.write('Su sueldo total es : $'+ total1.toFixed(2) + '</br>');
}else{
    document.write('Su comision es: $' + comision2.toFixed(2) + '</br>');
    document.write('Su sueldo total es $: '+ total2.toFixed(2) + '</br>');
}

