

function verUrgenciaCompra() {
    const comprar = parseInt(prompt("Ver urgencia de compra\n1- Excluyente\n2- Ocasional"));
    urgencia(comprar);
}

function verNombresPescados() {
    const nombre = prompt("¿Qué pescado quieres comprar?");
    tipoDePescado(nombre);
}

function verCantidadPescados() {
    cantidadPescado();
}


function urgencia(comprar) {
    let filtro = [];
    if (comprar === 1) {
        filtro = pescados.filter(pescado => pescado.compra === "excluyente");
    } else if (comprar === 2) {
        filtro = pescados.filter(pescado => pescado.compra === "ocasional");
    } else {
        mostrarResultado('Opción inválida');
        return;
    }
    mostrarTabla(filtro);
}

function tipoDePescado(nombre) {
    let pescado = pescados.find(pescado => pescado.nombre.toLowerCase() === nombre.toLowerCase());
    if (pescado !== undefined) {
        mostrarResultado(`El pescado que buscabas:<br>ID: ${pescado.id}<br>NOMBRE: ${pescado.nombre}<br>COMPRA: ${pescado.compra}`);
    } else {
        mostrarResultado("El nombre no es correcto");
    }
}

function cantidadPescado() {
    mostrarResultado(`Tipos de pescados restantes: ${pescados.length}`);
}

function mostrarResultado(resultado) {
    document.getElementById('resultados').innerHTML = resultado;
}

function mostrarTabla(datos) {
    let table = '<table><tr><th>ID</th><th>Nombre</th><th>Compra</th></tr>';
    datos.forEach(pescado => {
        table += `<tr><td>${pescado.id}</td><td>${pescado.nombre}</td><td>${pescado.compra}</td></tr>`;
    });
    table += '</table>';
    mostrarResultado(table);
}

localStorage.setItem("pescados1", JSON.stringify(pescados));

 let pescadoObtenido = JSON.parse(localStorage.getItem("pescados1"));
 console.log(pescadoObtenido);

