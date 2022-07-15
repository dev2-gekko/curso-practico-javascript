function calcularModa() {
    entradaModa = document.getElementById("inputModa");
    modaValue = entradaModa.value;
  
    let arrayValor = Array.from(modaValue.split(","), Number);
  
    const listaContador = {};
    
    //CONVERTIR EN OBJETO, ORGANIZAR Y SUMAR LA CANTIDAD DE IGUALES
    arrayValor.map(function (elemento) {
      if (listaContador[elemento]) {
        // listaContador[elemento] = listaContador[elemento] + 1;
        listaContador[elemento] += 1;
      } else {
        listaContador[elemento] = 1;
      }
    });
    
    // SE MANDA COMO ARGUMENTO EL OBJETO QUE SE CONVERTIRA EN ARRAY
    const listaArray = Object.entries(listaContador).sort(function (elementoA, elementoB) {
      return elementoA[1] - elementoB[1];
    });
  
    const moda = listaArray[listaArray.length - 1];
    
    const mostrarResultado = document.getElementById("resultadoModa");
    mostrarResultado.innerText = "La moda es de: " + moda;
}
  