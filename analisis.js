// Helpers

function esPar(numerito) {
    return (numerito % 2 === 0);
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

// Calculadora de mediana

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
    } else {
        const personitaMitad = lsita[mitad];
        return personitaMitad;
    }
}

const salariosCol = colombia.map(
    function(personita) {
        return personita.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Mediana top 10%

const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount
);

const medianaTop10Col = medianaSalarios(salariosColTop10);

// Impuesto de todos los salarios

const impuestoSalarios = colombia.map(
    function(salario) {
        return "El impuesto de " + salario.name + " de su salario " + salario.salary + " es " + (salario.salary * 16) / 100;
    }
);

// Fondo de ahorro

const fondoAhorro = colombia.map(
    function(salarios) {
        return salarios.salary + (salarios.salary * 10) / 100;
    }
);

console.log({
    medianaGeneralCol,
    medianaTop10Col,
    impuestoSalarios,
    fondoAhorro
});


// Calculadora de Salario Libre despues de quitar deudas e impuestos

function calcularSalarioLibre() {
    const inputSalario = document.getElementById("inputSalario");
    const valueInputSalario = inputSalario.value;

    const selectImpuesto = document.getElementById("inputImpuesto");
    const valueSelectImpuesto = selectImpuesto.value;

    const quitarImpuestoDeSalario = valueInputSalario - (valueInputSalario * valueSelectImpuesto) / 100;

    const deuda = document.getElementById("inputDeudasDelMes");
    const valueDeuda = deuda.value;

    const salarioLibre = quitarImpuestoDeSalario - valueDeuda;

    document.getElementById("resultadoCalcularSalarioLibre").value = salarioLibre;
}