
function mostrarResultado(resultado) {
    document.getElementById('resultados').innerHTML = resultado;
}

function verUrgenciaCompra() {
    const comprar = parseInt(document.getElementById('urgencia').value);
    urgencia(comprar);
}

function verNombresPescados() {
    const nombre = document.getElementById('nombrePescado').value;
    tipoDePescado(nombre);
}

function verCantidadPescados() {
    cantidadPescado();
}

function VerSinStock() {
    ObtenerSinStock();
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
    let pescado = pescados.find(p => p.nombre.toLowerCase() === nombre.toLowerCase());
    if (pescado !== undefined) {
        Swal.fire({
            title: "Felicitaciones",
            text: "Haz elegido " + nombre,
            imageUrl: ImagenPescado(nombre), 
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image"
        });
        mostrarResultado(`El pescado que buscabas:<br>ID: ${pescado.id}<br>NOMBRE: ${pescado.nombre}<br>COMPRA: ${pescado.compra}`);
    } else {
        Swal.fire({
            title: "Lo siento",
            text: "El nombre no es correcto",
        });
        mostrarResultado("El nombre no es correcto");
    }
}

function ImagenPescado(nombrePescado) {
    switch (nombrePescado.toLowerCase()) {
        case 'boga':
            return 'https://static.cotodigital3.com.ar/sitios/fotos/full/00017800/00017805.jpg?3.0.170';
        case 'sabalo':
            return 'https://acdn.mitiendanube.com/stores/001/219/229/products/sabalo-entero1-28111bdb95d6fde75816026891460222-640-0.jpg';
        case 'dorado':
            return 'https://i.pinimg.com/236x/55/9d/f3/559df36ca00e554dc512c38ea4edfc08.jpg';
        case 'surubi':
            return 'https://www.magyp.gob.ar/sitio/areas/pesca_continental/especies/surubi.jpg';
        default:
            return '';
    }
}

function cantidadPescado() {
    Swal.fire({
        title: "Te restan",
        text: `${pescados.length}` + " tipos de pescados",
        icon: "success",
    });
    mostrarResultado(`Tipos de pescados restantes: ${pescados.length}`);
}

function mostrarTabla(datos) {
    let table = '<table class="table table-striped"><thead><tr><th>ID</th><th>Nombre</th><th>Compra</th></tr></thead><tbody>';
    datos.forEach(pescado => {
        table += `<tr><td>${pescado.id}</td><td>${pescado.nombre}</td><td>${pescado.compra}</td></tr>`;
    });
    table += '</tbody></table>';
    mostrarResultado(table);
}

function ObtenerSinStock() {
    const SinStock = './user.json';
    fetch(SinStock)
        .then(response => response.json())
        .then(datos => {
            let sinStockHTML = '<table class="table table-striped"><thead><tr><th>Nombre</th><th>Precio Anterior</th></tr></thead><tbody>';
            datos.forEach(faltante => {
                sinStockHTML += `<tr><td>${faltante.nombre}</td><td>${faltante.precioAnterior}</td></tr>`;
            });
            sinStockHTML += '</tbody></table>';
            document.getElementById("SinStock").innerHTML = sinStockHTML;
        })
        .catch(error => console.log('Error al obtener los datos:', error));
}

localStorage.setItem("pescados1", JSON.stringify(pescados));
let pescadoObtenido = JSON.parse(localStorage.getItem("pescados1"));
console.log(pescadoObtenido);
