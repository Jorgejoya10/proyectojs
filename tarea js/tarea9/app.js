// Solicitamos el número de filas del triángulo
let filas = parseInt(prompt("Ingrese el número de filas:"));

// Ciclo para imprimir las filas del triángulo
for (let i = 1; i <= filas; i++) {
  // Ciclo para imprimir las columnas de cada fila
  for (let j = 1; j <= filas; j++) {
    if (j <= i) {
      document.write("#");
    } else {
      document.write("&nbsp;");
    }
  }
  document.write("<br>");
}

// Ciclo para imprimir las filas del triángulo invertido
for (let i = filas - 1; i >= 1; i--) {
  // Ciclo para imprimir las columnas de cada fila
  for (let j = 1; j <= filas; j++) {
    if (j <= i) {
      document.write("#");
    } else {
      document.write("&nbsp;");
    }
  }
  document.write("<br>");
}
