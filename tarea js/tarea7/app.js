


let n = parseInt(prompt("Ingrese un número para calcular su factorial:"));
let factorial = 1;

for (let i = 1; i <= n; i++) {
  factorial *= i;
  document.write(i + "! = " + i);
  
  for (let j = i - 1; j >= 1; j--) {
    document.write(" * " + j);
  }
  
  document.write(" = " + factorial + "<br>");
}
