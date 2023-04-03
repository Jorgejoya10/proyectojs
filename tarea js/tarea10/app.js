// Pedir al usuario el número de ciclos
let n = parseInt(prompt("Ingrese el número de ciclos:"));

// Recorrer desde 1 hasta n
for (let i = 1; i <= n; i++) {
  
  // Imprimir triángulo 1
  for (let j = 1; j <= i; j++) {
    document.write("#");
  }
  document.write("<br>");

  // Imprimir triángulo 2
  for (let j = 1; j <= i; j++) {
    document.write("#");
  }
  document.write("<br>");
  for (let j = 1; j <= (n-i); j++) {
    document.write("#");
  }
  document.write("<br>");

}
