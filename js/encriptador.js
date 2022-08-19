// 0. Ocultar el textarea del mensaje encriptado en la barra lateral al cargar la página, para mostrarlo al accionar el botón "encriptar"
window.onload = function () {
    document.getElementById('txt__barra-lateral').style.display = 'none';
    document.getElementById('btn__barra-lateral').style.display = 'none';
}

// 1. Ocultar #img__barra-lateral, #h2__barra-lateral y #p__barra-lateral, imagen, h2 y p, de la barra lateral al accionar el botón encriptar .
function ocultarMostrar_barraLateral() {
    document.getElementById('img__barra-lateral').style.display = 'none';
    document.getElementById('h2__barra-lateral').style.display = 'none';
    document.getElementById('p__barra-lateral').style.display = 'none';
    document.getElementById('txt__barra-lateral').style.display = 'initial';
    document.getElementById('btn__barra-lateral').style.display = 'initial';
}

// 2. Funciones Encriptar y Desencriptar
function encriptar() {
    // Validar si el textarea principal está vacío, si es el caso, no hacer nada.
    // Si no está vacío, proceder con la lógica, comenzando por ocultar elementos de la barra lateral
    var verificarVacio = document.getElementById('text__area-mensaje').value;
    if (verificarVacio == "") {
        alert("Por favor ingresa un mensaje.");
    } else {
        ocultarMostrar_barraLateral();
    }

    // sin importar cómo lo escriba el usuario, forzar mensaje en minúsculas
    var msj1 = document.getElementById('text__area-mensaje').value.toLowerCase();
    // reemplazando todas las coincidencias con sus nuevos valores
    var msj2 = msj1.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat");
    // mostrando el nuevo mensaje en el textarea de la barra lateral
    document.getElementById('txt__barra-lateral').innerHTML = msj2;
    // limpiando el textarea principal
    document.getElementById('text__area-mensaje').value = "";
}

function desencriptar() {
    ocultarMostrar_barraLateral();

    // sin importar cómo lo escriba el usuario, forzar mensaje en minúsculas
    var msj1 = document.getElementById('text__area-mensaje').value.toLowerCase();
    // reemplazando todas las coincidencias con sus nuevos valores
    var msj2 = msj1.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u");
    // mostrando el nuevo mensaje en el textarea de la barra lateral
    document.getElementById('txt__barra-lateral').innerHTML = msj2;
    // limpiando el textarea principal
    document.getElementById('text__area-mensaje').value = "";
}

// 3. Copiar a través de un botón
function copiar() {
    var texto = document.getElementById('txt__barra-lateral');
    texto.select();
    document.execCommand('copy');
}

// Funciones para los botones
var btn_encriptar = document.querySelector("#btn-encriptar");
btn_encriptar.onclick = encriptar;

var btn_desencriptar = document.querySelector("#btn-desencriptar");
btn_desencriptar.onclick = desencriptar;

var btn_copiar = document.querySelector("#btn__barra-lateral");
btn_copiar.onclick = copiar;
