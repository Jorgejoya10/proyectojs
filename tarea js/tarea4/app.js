/* Tarea Programa 004:
● Programa que convierte unidades: metro a yardas
El programa solicita
➔ Cantidad y Conversión a realizar
El programa entrega
➔ Nombre de la conversión
➔ Resultado de la Conversión realizada
➔ Al final pregunta ¿Desea realizar otra operación? (vuelve a ejecutar el
programa en caso de ser necesario) */




// Definir la lista de opciones de conversión en una variable separada
const conversionFactors = {
    metro: 1,
    centimetro: 100,
    pie: 3.28084,
    yarda: 1.09361,
    pulgada: 39.3701,
    kilometro: 0.001,
  };
  
  let realizarOtraConversion = true;
  
  while (realizarOtraConversion) {
    // Solicitar al usuario la cantidad y las unidades
    const cantidad = parseFloat(prompt('Introduce la cantidad a convertir:'));
    const unidadInicial = prompt('Introduce la unidad de medida inicial:');
    const unidadFinal = prompt('Introduce la unidad de medida final:');
  
    // Realizar la conversión y mostrar el resultado
    const resultado = convertir(cantidad, unidadInicial, unidadFinal);
    document.write(`${cantidad} ${unidadInicial} son ${resultado} ${unidadFinal}.<br>`);
  
    // Preguntar si el usuario desea realizar otra conversión
    const respuesta = prompt('¿Desea realizar otra conversión? (Sí/No)');
    realizarOtraConversion = (respuesta.toLowerCase() === 'sí' || respuesta.toLowerCase() === 'si');
  }
  
  function convertir(cantidad, unidadInicial, unidadFinal) {
    // Obtener los factores de conversión para las unidades dadas
    const factorInicial = conversionFactors[unidadInicial.toLowerCase()];
    const factorFinal = conversionFactors[unidadFinal.toLowerCase()];
  
    // Calcular la conversión
    const cantidadEnMetros = cantidad / factorInicial;
    const resultado = cantidadEnMetros * factorFinal;
  
    // Retornar el resultado de la conversión
    return resultado;
  }
  
