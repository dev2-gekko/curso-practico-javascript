// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cmˆ2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   "Los lados del triángulo miden: "
//   + ladoTriangulo1
//   + "cm, "
//   + ladoTriangulo2
//   + "cm, "
//   + baseTriangulo
//   + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
// console.log("El área del triángulo es: " + areaTriangulo + "cmˆ2");

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
// console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();

// Reto - Altura triangulo isosceles

function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}


// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

//Triangulo
function calcularPerimetroTriangulo() {
    const inputlado1 = document.getElementById("InputTrianguloLado1");
    const inputlado2 = document.getElementById("InputTrianguloLado2");
    const inputbase = document.getElementById("InputTrianguloBase");
    const valuelado1 = inputlado1.value;
    const valuelado2 = inputlado2.value;
    const valuebase = inputbase.value;
  
    const perimetro = perimetroTriangulo(valuelado1,valuelado2,valuebase);
    alert(perimetro);
  }
  function calcularAreaTriangulo() {
    const inputbase = document.getElementById("InputTrianguloBase");
    const inputaltura = document.getElementById("InputTrianguloAltura");
    const valuebase = inputbase.value;
    const valuealtura = inputaltura.value;
  
    const area = areaTriangulo(valuebase,valuealtura);
    alert(area);
  }

//Circulo
function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculoRadio");
    const valueRadio = input.value;
  
    const perimetro = perimetroCirculo(valueRadio);
    alert(perimetro);
  }

  function calcularDiametroCirculo() {
    const input = document.getElementById("InputCirculoRadio");
    const valueRadio = input.value;
  
    const diametro = diametroCirculo(valueRadio);
    alert(diametro);
  }

  function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculoRadio");
    const valueRadio = input.value;
  
    const area = areaCirculo(valueRadio);
    alert(area);
  }

// Reto isosceles
function calcularAlturaTrianguloIsosceles() {
    const inputlado1 = document.getElementById("InputTrianguloIsoscelesLado1");
    const inputlado2 = document.getElementById("InputTrianguloIsoscelesLado2");
    const inputbase = document.getElementById("InputTrianguloIsoscelesBase");
    const valuelado1 = inputlado1.value;
    const valuelado2 = inputlado2.value;
    const valuebase = inputbase.value;
  
    const altura = alturaTrianguloIsosceles(valuelado1,valuelado2,valuebase);
    alert(altura);
  }