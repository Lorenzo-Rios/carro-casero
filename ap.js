
const relojes = [
    {nombre: "Box Engasse", precio: 15000 },
    {nombre: "English Horse", precio: 25000 },
    {nombre: "Knock Nap", precio: 35000 },
    {nombre: "La Night", precio: 18000 },
    {nombre: "Silver All", precio: 32000 },
    {nombre: "Skin Glam", precio: 21000 },
    {nombre: "Midimix", precio: 52000 },
    {nombre: "Sir Blue", precio: 32000 },
];

const envios = []

const carrito = []

let seleccion = prompt ("Desea comprar alguno de nuestros productos?")

while (seleccion != "si" && seleccion != "no") {
    alert ("Porfavor, ingresar si o no")
    seleccion = prompt ("Desea comprar alguno de nuestros productos?")
    
}



while (seleccion === "si") {
    function agregarEnvio () {
        envios.push({nombre, direccion, email, telefono})
    }

    let nombre = prompt ("Ingresa tu nombre:")
    let direccion = prompt ("Ingresa tu direccion:")
    let email = prompt ("Ingresa tu email:")
    let telefono = prompt ("Ingresa tu telefono:")

    agregarEnvio ()
    
    console.log(envios)
    
    alert ("A continuacion nuestra lista de productos:")
    let todoslosRelojes = relojes.map ((relojes) => relojes.nombre + " " + relojes.precio + "$")

    alert (todoslosRelojes.join(" - "))
    seleccion = prompt ("Desea seguir comprando?")
}

