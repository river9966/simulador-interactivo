let nombre = prompt("Ingrese Su Nombre")
if (nombre == "") {
    alert("el valor ingresado es incorecto")
    nombre = prompt("Ingrese Su Nombre")
}
alert("Bienvenido " + nombre)
alert("Estos Son Nuestros Productos")
let placaVideo = " Placa de video Nvidia "
let Procesador = " Procesador intel core i7 "
let fuente = " Fuente de Alimentacion  "
let madre = " Placa Madre "

let precioPlaca = 125500
let precioProcesador = 55000
let precioFuente = 35000
let precioMadre = 25500

let cantidad = parseInt("")
let precioTotal = parseFloat("")

function cantidadUnidades(a, b) {

    let resultado = a * b

    return resultado

}
let listaPrecios = Number(prompt(" 1) Placa De video NVIDIA" + "\n 2) Procesador Intel i7" + "\n 3) Fuente De Alimentacion" + "\n 4) Placa Madre" + " \nIngrese el Nro del Producto que desea comprar"))
while (listaPrecios != "no") {

    if (listaPrecios == "1") {
        alert("usted selecciono " + placaVideo)
        cantidad = parseInt(prompt("el precio de la placa de video es: $" + precioPlaca + " cuantas desea?"))
        precioTotal = alert("usted compro " + cantidad + " unidades " + " con un precio total de $" + cantidadUnidades(precioPlaca, cantidad))

    }
    else if (listaPrecios == "2") {
        alert("usted selecciono " + Procesador)
        cantidad = parseInt(prompt("el precio del Procesador es: $" + precioProcesador + " cuantas desea?"))
        precioTotal = alert("usted compro " + cantidad + " unidades " + " con un precio total de $" + cantidadUnidades(precioProcesador, cantidad))
    }
    else if (listaPrecios == "3") {
        alert("usted selecciono " + fuente)
        cantidad = parseInt(prompt("el precio de la fuente es: $" + precioFuente + " cuantas desea?"))
        precioTotal = alert("usted compro " + cantidad + " unidades " + " con un precio total de $" + cantidadUnidades(precioFuente, cantidad))
    }
    else if (listaPrecios == "4") {
        alert("usted selecciono " + madre)
        cantidad = parseInt(prompt("el precio de la placa Madre es: $" + precioMadre + " cuantas desea?"))
        precioTotal = alert("usted compro " + cantidad + " unidades " + " con un precio total de $" + cantidadUnidades(precioMadre, cantidad))
    }
    else if (listaPrecios == " ") {
        alert("el dato ingresado es incorrecto")
        
    }

    listaPrecios = prompt("Desea sumar otro producto mas? " + "\n Ingrese SI o NO")

    if (listaPrecios == "si" || (listaPrecios == "SI")) {

        listaPrecios = Number(prompt(" 1) Placa De video NVIDIA" + "\n 2) Procesador Intel i7" + "\n 3) Fuente De Alimentacion" + "\n 4) Placa Madre" + " \nIngrese el Nro del Producto que desea comprar"))
    }


}


alert("Muchas Gracias Por su Compra " + nombre)




















