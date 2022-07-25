// // Helpers
// function esPar(numerito) {
//     return (numerito % 2 === 0);
// }
  
// function calcularMediaAritmetica(lista) {
//     const sumaLista = lista.reduce(
//       function (valorAcumulado = 0, nuevoElemento) {
//         return valorAcumulado + nuevoElemento;
//       }
//     );
//     const promedioLista = sumaLista / lista.length;
//     return promedioLista;
// }
  
// // Calculadora de mediana
// function medianaSalarios(lista) {
//     const mitad = parseInt(lista.length / 2);
  
//     if (esPar(lista.length)) {
//       const personitaMitad1 = lista[mitad - 1];
//       const personitaMitad2 = lista[mitad];
  
//       const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
//       return mediana;
//     } else {
//       const personitaMitad = lista[mitad];
//       return personitaMitad;
//     }
// }
  
// // Mediana General
// const salariosCol = colombia.map(
//     function (personita) {
//       return personita.salary;
//     }
// );
  
// const salariosColSorted = salariosCol.sort(
//     function (salaryA, salaryB) {
//       return salaryA - salaryB;
//     }
// );
  
// const medianaGeneralCol = medianaSalarios(salariosColSorted);
  
// // Mediana del top 10%
// const spliceStart = (salariosColSorted.length * 90) / 100;
// const spliceCount = salariosColSorted.length - spliceStart;
  
// const salariosColTop10 = salariosColSorted.splice(
//     spliceStart,
//     spliceCount,
// );
  
// const medianaTop10Col = medianaSalarios(salariosColTop10);
  
// console.log({
//     medianaGeneralCol,
//     medianaTop10Col,
// });

///////////////////////////////////////////////////////////////

//Funciones Helpers
function esPar(numero){
    (numero % 2 ===0);
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

console.group("Personas y sus salarios");
console.log(typeof(colombia))
console.log(colombia);
console.groupEnd();

//Calculadora Mediana
function medianaSalaries(lista) {
    const mitad = parseInt(lista.length / 2);
    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;

    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

//Mediana General
const salariosCol = colombia.map(
    function(persona) {
        return persona.salary;
    }
);
console.group("Just Salaries");
console.log(typeof(salariosCol))
console.log(salariosCol);
console.groupEnd();

const salariosColSorted = salariosCol.sort(
    function (salaryA, SalaryB){
        return salaryA - SalaryB;
    }
);
console.group("Salarios organizados");
console.log(typeof(salariosColSorted))
console.log(salariosColSorted);
console.groupEnd();

const medianaGeneralCol = medianaSalaries(salariosColSorted);

//Mediana Top 10%

const spliceStart = (salariosColSorted.length * 90)/100;
const spliceCount = (salariosColSorted.length) - spliceStart;
const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Col = medianaSalaries(salariosColTop10);

console.group("Mediana de salarios");
console.log(typeof(medianaGeneralCol));
console.log(typeof(medianaTop10Col))
console.log ({
    medianaGeneralCol,
    medianaTop10Col,
});

const printSalaries = document.getElementById("salariesColombia");
printSalaries.innerText = "Los salarios colombianos dentro de la base de datos son: " + "$" + salariosCol[0] + ", $" + salariosCol[1]  + ", $" + salariosCol[2]  + ", $" + salariosCol[3]  + ", $" + salariosCol[4]  + ", $" + salariosCol[5]  + ", $" + salariosCol[6]  + ", $" + salariosCol[7]  + ", $" + salariosCol[8]  + ", $" + salariosCol[9]  + ", $" + salariosCol[10]  + ", $" + salariosCol[11]  + ", $" + salariosCol[12]  + ", $" + salariosCol[13]  + ", $" + salariosCol[14]  + ", $" + salariosCol[15]  + ", $" + salariosCol[16]  + ", $" + salariosCol[17]  + ", $" + salariosCol[18]  + ", $" + salariosCol[19] + ".";

const medianaSalariesOfColombia = document.getElementById("medianaSalariesColombia");
medianaSalariesOfColombia.innerText = "La mediana de estos salarios es: $" + medianaGeneralCol + ".";

const printSalariesTop10 = document.getElementById("salariesTop10Col")
printSalariesTop10.innerText = "El top 10% de salarios en colombia segun la base de datos es: " + salariosColTop10[0] + ", " + salariosColTop10[1] + ".";

const printMedianaSalariesTop10 = document.getElementById("medianaSalariesTop10Col")
printMedianaSalariesTop10.innerText = "La mediana del top 10% de los salarios de la base de datos es: " + medianaTop10Col;