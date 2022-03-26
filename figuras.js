// Código del cuadrado

console.group("Cuadrados");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado);

// const perimetroCuadrado = ladoCuadrado * 4;
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado);

function perimetroCuadrado(lado) {
    return lado * 4;
}

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();



// Código del triángulo

console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTrinangulo = 4;

/* console.log(
    "Los lados del triángulo miden: "
    + ladoTriangulo1
    + "cm, "
    + ladoTriangulo2
    + "cm, "
    + baseTrinangulo
    + "cm"
); */

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTrinangulo;
//console.log("El perímetro del triangulo es: " + perimetroTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

//const areaTriangulo = (baseTrinangulo * alturaTriangulo) / 2;
//console.log("El área del triángulo es: " + areaTriangulo + "cm");

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();



// Código del círculo

console.group("Círculos");


// Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");

// Diámetro
// const diametroCirculo = radioCirculo * 2;
// console.log("El radio del circulo es: " + diametroCirculo + "cm");

function diametroCirculo(radio) {
    return radio * 2;
}

// PI
const PI = Math.PI;
// console.log("PI es: " + PI);

// Circunferencia
// const perimetroCirculo = diametroCirculo * PI;
// console.log("El perímetro del círculo es: " + perimetroCirculo);

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Área
// const areaCirculo = (radioCirculo * radioCirculo) / PI;
// console.log("El área del círculo es: " + areaCirculo + "cm");

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();



// Aquí interactuamos con el HTML

// Cuadrado

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const valor = input.value;

    const perimetro = perimetroCuadrado(valor);
    //alert(perimetro);
    document.getElementById("resultadoCuadrado").value = perimetro;
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const valor = input.value;

    const area = areaCuadrado(valor);
    //alert(area);
    document.getElementById("resultadoCuadrado").value = area;
}



// Triángulo

function calcularPerimetroTriangulo() {
    const input = document.getElementById("InputTrianguloAltura1");
    const valor = Number(input.value);

    const input2 = document.getElementById("InputTrianguloAltura2");
    const valor2 = Number(input2.value);

    const input3 = document.getElementById("InputTrianguloAlturaBase");
    const valor3 = Number(input3.value);

    const perimetro = perimetroTriangulo(valor,valor2,valor3);

    //alert(perimetro);
    document.getElementById("resultadoTriangulo").value = perimetro;
}

function calcularAreaTriangulo() {
    const input = document.getElementById("InputTrianguloAltura1");
    const valor = Number(input.value);

    const input2 = document.getElementById("InputTrianguloAlturaBase");
    const valor2 = Number(input2.valu);

    const area = areaTriangulo(valor, valor2);
    //alert(area);
    document.getElementById("resultadoTriangulo").value = area;
}



// Circulo

function calcularDiametroCirculo() {
    const input = document.getElementById("InputCirculo");
    const valor = input.value;

    const diametro = diametroCirculo(valor);

    document.getElementById("resultadoCirculo").value = diametro;
}

function calcularPerimetroTriangulo() {
    const input = document.getElementById("InputCirculo");
    const valor = input.value;

    const perimetro = perimetroCirculo(valor);

    //alert(perimetro);
    document.getElementById("resultadoCirculo").value = perimetro;
}

function calcularAreaTriangulo() {
    const input = document.getElementById("InputCirculo");
    const valor = input.value;

    const area = areaCirculo(valor);
    //alert(area);
    document.getElementById("resultadoCirculo").value = area;
}