
function calcularPrecioDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}


function buttonAplicarPrecioDescuento() {

    const cuponesDisponibles = [
        {
            nombreCupon: "Familia",
            descuentoCupon: 100
        },
        {
            nombreCupon: "Amigos",
            descuentoCupon: 50
        },
        {
            nombreCupon: "Blackfriday",
            descuentoCupon: 70
        },
        {
            nombreCupon: "Venta Nocturna",
            descuentoCupon: 20
        }
    ];

    const InputPrice = document.getElementById("InputPrice");
    const priceValue = InputPrice.value;

    // const InputDiscount = document.getElementById("InputDiscount");
    // const discountValue = InputDiscount.value;

    const inputCupon = document.getElementById("InputCupon");
    const cuponValue = inputCupon.value;

    const cuponesNombresDisponibles = function(cuponesDisponibles) {
        return cuponesDisponibles.nombreCupon === cuponValue;
    }

    const aplicarCupon =  cuponesDisponibles.find(cuponesNombresDisponibles);

    const resultadoPrecio = document.getElementById("resultadoPrecio");

    if(aplicarCupon) {
        let precioConDescuento;
        switch (aplicarCupon.nombreCupon) {
            case "Familia":
                precioConDescuento = calcularPrecioDescuento(priceValue, aplicarCupon.descuentoCupon);
                resultadoPrecio.innerText = "El precio con descuento es: $" + precioConDescuento;
                break;

            case "Amigos":
                precioConDescuento = calcularPrecioDescuento(priceValue, aplicarCupon.descuentoCupon);
                resultadoPrecio.innerText = "El precio con descuento es: $" + precioConDescuento;
                break;

            case "Blackfriday":
                precioConDescuento = calcularPrecioDescuento(priceValue, aplicarCupon.descuentoCupon);
                resultadoPrecio.innerText = "El precio con descuento es: $" + precioConDescuento;
                break;

            case "Venta Nocturna":
                precioConDescuento = calcularPrecioDescuento(priceValue, aplicarCupon.descuentoCupon);
                resultadoPrecio.innerText = "El precio con descuento es: $" + precioConDescuento;
                break;
        
            default:
                break;
        }
    } else {
        console.log("Cupon no valido");
    }
}