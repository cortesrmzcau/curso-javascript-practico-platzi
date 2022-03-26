function calcularAlturaTrianguloIsoseles(lado1, lado2, ladoB) {
    if (lado1 != lado2) {
        console.log("Los lados no son iguales");
    } else {
        const altura = Math.sqrt(lado1**2 - ladoB**2 / 4);
        console.log(altura);
    }
}

calcularAlturaTrianguloIsoseles(6,6,4);