
let menu = parseInt(prompt("¿Qué te gustaría ver?\n1 - Urgencia de compra\n2 - Nombres de pescados\n3 - Cantidad de pescados\n0 - Salir"));

while (menu !== 0) {
    switch (menu) {
        case 1:
            let opcion = parseInt(prompt("Ver urgencia de compra \n1- Excluyente \n2- Ocasional"));
            urgencia(opcion);
            break;
        
        case 2:
            let nombre = prompt("¿Qué pescado quieres comprar?");
            tipoDePescado(nombre);
            break;
        
        case 3:
            cantidadPescado();
            break;

        default:
            alert("¡Opción no válida!");
            break;
    }

    menu = parseInt(prompt("¿Qué te gustaría ver?\n1 - Urgencia de compra\n2 - Nombres de pescados\n3 - Cantidad de pescados\n0 - Salir"));
}

function urgencia(comprar) {
    let filtro = [];
    if (comprar === 1) {
        filtro = pescados.filter(pescado => pescado.comprar === "excluyente");
    } else if (comprar === 2) {
        filtro = pescados.filter(pescado => pescado.comprar === "ocasional");
    } else {
        alert('Opción inválida');
        return;
    }
    console.table(filtro);
}

function tipoDePescado(nombre) {
    let pescado = pescados.find(pescado => pescado.nombre.toLowerCase() === nombre.toLowerCase());
    if (pescado !== undefined) {
        alert(`El pescado que buscabas:\nID: ${pescado.id}\nNOMBRE: ${pescado.nombre}\nCOMPRA: ${pescado.compra}`);
    } else {
        console.log("El nombre no es correcto");
    }
}

function cantidadPescado() {
    console.log(`Tipos de pescados restantes: ${pescados.length}`);
}