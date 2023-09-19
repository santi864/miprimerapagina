//alert("Hola este es mi Javascript");
//let nombre = ("Santiago Kerr");console.log(nombre);

let contenidoTitulo = "Nombre";

let titulo = document.querySelector(".logo");
titulo.innerHTML = contenidoTitulo;

let textoTitulo = titulo.value;
console.log(textoTitulo);

if(textoTitulo == "Nombre") {
    titulo.innerHTML = "Otro";
} else {
    console.log("No se cumple");
};

let nombre1 = "Pedro";
let ciudad1 = "Potosí";
let edad = 48;

let parrafo = document.querySelector(".abcd");

function cambiarTexto(nombre1, ciudad1, edad) {
    let contenido = `Este soy yo. Mi nombre es ${nombre1} Andrés Kerr. Naci en ${ciudad1}, Argentina. Tengo ${edad} y mi meta es ser desarrollador full-stack`;
    return contenido;
}

parrafo.innerText = cambiarTexto(nombre1, ciudad1, edad);