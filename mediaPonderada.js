const materias = [
    {
        curso: "Programación Orientada a Objetos",
        calificacion: 80,
        creditos: 5
    },
    {
        curso: "Calculo Integral",
        calificacion: 80,
        creditos: 4
    },
    {
        curso: "Programación Web",
        calificacion: 100,
        creditos: 5
    },
    {
        curso: "Etica",
        calificacion: 70,
        creditos: 2
    }
];

const calificacionPorCreditos = materias.map(
        function calificacionPorCreditos(materias) {
            return materias.calificacion * materias.creditos;
    }
);

const sumaElementosMateria = calificacionPorCreditos.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
    }
);

const creditosMateria = materias.map(function (materia) {
    return materia.creditos;
    }
);

const sumaCreditos = creditosMateria.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
    }
)

const promedioPonderadoMateriasConCreditos = sumaElementosMateria / sumaCreditos;

console.log(calificacionPorCreditos);
console.log(sumaCreditos);
console.log(promedioPonderadoMateriasConCreditos);