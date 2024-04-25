

function datos() {
    

    
    const listapez = JSON.parse(localStorage.getItem("pescados1"));

    if (listapez === null) {
        console.log("No se encontraron datos en el almacenamiento local");
    } else {
        console.log("Datos de pescados recuperados:", listapez);
    }

    const menu = parseInt(document.getElementById("menu").value);
    let output = document.getElementById("output");
    let result = "";


    function urgencia(comprar) {
        let filtro = [];
        if (comprar === 1) {
            filtro = listapez.filter(pescado => pescado.compra === "excluyente");
        } else if (comprar === 2) {
            filtro = listapez.filter(pescado => pescado.compra === "ocasional");
        } else {
            alert('Opción inválida');
            return;
        }
        console.table(filtro);
    }

    function tipoDePescado(nombre) {
        let pescado = listapez.find(pescado => pescado.nombre.toLowerCase() === nombre.toLowerCase());
        if (pescado !== undefined) {
            alert(`El pescado que buscabas:\nID: ${pescado.id}\nNOMBRE: ${pescado.nombre}\nCOMPRA: ${pescado.compra}`);
        } else {
            console.log("El nombre no es correcto");
        }
    }

    function cantidadPescado() {
        console.log(`Tipos de pescados restantes: ${listapez.length}`);
    }

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
}

document.getElementById("boton").addEventListener("click", datos);
