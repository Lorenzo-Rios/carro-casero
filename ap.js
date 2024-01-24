const relojes = [
    {nombre: "reloj1", precio: 15000 },
    {nombre: "reloj2", precio: 25000 },
    {nombre: "reloj3", precio: 35000 },
    {nombre: "reloj4", precio: 18000 },
    {nombre: "reloj5", precio: 32000 },
    {nombre: "reloj6", precio: 21000 },
    {nombre: "reloj7", precio: 52000 },
    {nombre: "reloj8", precio: 32000 },
];

const envios = []

const carrito = []

let seleccion = prompt ("Desea comprar alguno de nuestros productos?")

while (seleccion != "si" && seleccion != "no") {
    alert ("Porfavor, ingresar si o no")
    seleccion = prompt ("Desea comprar alguno de nuestros productos?")
    
}



while (seleccion === "si") {  
    const agregarEnvio = () => {
        let nombre = prompt ("Ingresa tu nombre:")
        let direccion = prompt ("Ingresa tu direccion:")
        let email = prompt ("Ingresa tu email:")
        let telefono = prompt ("Ingresa tu telefono:")
    
        const cliente = {nombre: nombre, direccion: direccion, email: email, telefono: telefono}
    
        envios.push (cliente)
      
    }
    agregarEnvio ()

    console.log(envios)

    break
}
if (seleccion == "si"){
    alert ("A continuacion nuestra lista de productos:")
    let todoslosRelojes = relojes.map ((relojes) => relojes.nombre + " " + relojes.precio + "$")

    alert (todoslosRelojes.join(" - "))
}
else if (seleccion == "no"){
   alert("Gracias por venir, vuelva pronto!")
}
while (seleccion != "no"){
    let reloj = prompt ('Elije un producto para tu carrito:')
    let precio = 0

    if (reloj == "reloj1" || reloj == "reloj2" || reloj == "reloj3" || reloj == "reloj4" || reloj == "reloj5" || reloj == "reloj6" || reloj == "reloj7" || reloj == "reloj8"){
        switch (reloj){
            case "reloj1" :
              precio = 15000
              break;
            case "reloj2" :
              precio = 25000
              break;
            case "reloj3" :
              precio = 35000
              break;
            case "reloj4" :
              precio = 18000
              break;
            case "reloj5" :
              precio = 32000
              break;
            case "reloj6" :
              precio = 21000
              break;
            case "reloj7" :
              precio = 52000
              break;
            case "reloj8" :
              precio = 32000
              break
            default:

              break;
        }
    let unidades = parseInt(prompt("Cuantas unidades llevara del producto seleccionado?"))

    carrito.push({reloj, unidades, precio})
    console.log(carrito);
    }
    else{
        alert("no tenemos ese producto")
    }

    seleccion = prompt ("Desea seguir comprando?")

    while(seleccion == "no"){
        alert("Gracias por su compra, vuelva pronto!")
        carrito.forEach((carritoFinal) =>{
            console.log(`reloj: ${carritoFinal.reloj}, unidades: ${carritoFinal.unidades}, total a pagar por producto: ${carritoFinal.unidades * carritoFinal.precio}$`);
        })
        break
    }
}

