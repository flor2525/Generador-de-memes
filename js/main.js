// ************** Panel lateral alternado (imagen y texto) **********************

const botonImg = document.getElementById('boton-img');
const botonTexto = document.getElementById('boton-texto');
const aside = document.getElementById('aside');
const formularioTexto = document.getElementById('formulario-texto');
const formularioImagen = document.getElementById('formulario-imagen');

// console.log(botonImg)
// console.log(botonTexto)
// console.log(aside)
// console.log(formularioTexto)
// console.log(formularioImagen)

botonImg.addEventListener('click', () => {
    aside.classList.remove('aside-oculto');
    aside.style.display = 'block';
    formularioTexto.style.display = 'none';
    formularioImagen.style.display = 'block';
})

botonTexto.addEventListener('click', () => {
    aside.classList.remove('aside-oculto');
    aside.style.display = 'block';
    formularioImagen.style.display = 'none';
    formularioTexto.style.display = 'block';
})

// ************** Cierre de panel lateral **********************

const cierreAside = document.getElementById('cierre-aside');

// console.log(cierreAside)

cierreAside.addEventListener('click',() => {
    aside.style.display = 'none';
    formularioTexto.style.display = 'none';
    formularioImagen.style.display = 'none';
})


// ************** Funcionalidades de imagen **********************



const espacioSuperior = document.getElementById('espacio-superior');
const imagenMeme = document.getElementById('imagen-meme');
const espacioInferior = document.getElementById('espacio-inferior');

const url = document.getElementById('url');
const fondoColor = document.getElementById('fondo-color');


// URL

url.addEventListener('keyup', () => {
    const urlImg = url.value;
    imagenMeme.innerHTML = `<img src="${urlImg}" alt="imagen meme" class='imagen-adaptada'>`
})

// Fondo

fondoColor.addEventListener('input', () => {
    // console.log(fondoColor.value);
    espacioInferior.style.backgroundColor = fondoColor.value
    espacioSuperior.style.backgroundColor = fondoColor.value
})







// ************** Funcionalidades de texto **********************

const textoSuperiorInput = document.getElementById('texto-superior-input');
const textoInferiorInput = document.getElementById('texto-inferior-input');
const textoSuperior = document.getElementById('texto-superior');
const checkSuperior = document.getElementById('check-superior');
const textoInferior = document.getElementById('texto-inferior');
const checkInferior = document.getElementById('check-inferior');


// Pintar texto en meme

textoSuperiorInput.addEventListener('keyup', () => textoSuperior.innerHTML = textoSuperiorInput.value);

textoInferiorInput.addEventListener('keyup', () => textoInferior.innerHTML = textoInferiorInput.value)

// Sin texto superior o inferior

checkSuperior.addEventListener('click', () => {
    if (checkSuperior.checked){
        espacioSuperior.style.display = 'none';
    } else {
        espacioSuperior.style.display = '';
        }
})

checkInferior.addEventListener('click', () => {
    if (checkInferior.checked){
        espacioInferior.style.display = 'none';
    } else {
        espacioInferior.style.display = '';
        }
})





