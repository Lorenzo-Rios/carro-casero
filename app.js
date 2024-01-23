
class Cliente {
    static id = 0

    constructor (nombreCliente, direccionCliente, emailCliente, telefonoCliente){
        this.id = ++Cliente.id

        let email = ''

        this.nombre = nombreCliente
        this.direccion = direccionCliente

        this.getEmail = function () {
            return email
        }

        this.sendEmail = function () {
            email = NuevoEmail
        }
    }
}
function llamarCliente (nombreCliente, direccionCliente, emailCliente, telefonoCliente) {
    let nombreCliente = prompt ("Porfavor, ingresa tu nombre completo:")

    let direccionCliente = prompt ("Porfavor, ingresa tu direccion de vivienda:")

    let emailCliente = prompt ("Porfavor ingresa tu direccion de email:")

    let telefonoCliente = prompt ("Porfavor, ingresa tu numero de telefono:")
    
}

llamarCliente (prompt("ingresa tu nombre:"))

const cliente1 = new Cliente (nombreCliente, direccionCliente, emailCliente, telefonoCliente)

const relojes = [
    {nombre: 'BOX ENGASSE', precio: }
]

const carrito = []

let consulta = prompt ('Desea comprar algun producto?')

while (consulta != "si" && != "no" ) {
    alert("Porfavor ingresa si o no")
}


