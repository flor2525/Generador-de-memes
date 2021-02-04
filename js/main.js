// ************** Panel lateral alternado (imagen y texto) **********************

const botonImg = document.getElementById('boton-img');
const botonTexto = document.getElementById('boton-texto');
const aside = document.getElementById('aside');
const formularioTexto = document.getElementById('formulario-texto');
const formularioImagen = document.getElementById('formulario-imagen');


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
    imagenMeme.style.backgroundColor = fondoColor.value
    imagenMeme.style.backgroundColor = fondoColor.value
})

// Mix blend de fondo

const propiedadFondo = document.getElementById('propiedad-fondo');

propiedadFondo.addEventListener('change', () => {
    imagenMeme.style.mixBlendMode = propiedadFondo.value;
})

// Filtros rangos

const filtrosRangos = document.getElementsByClassName('input-rango');


// ** Brillo

filtrosRangos[0].addEventListener('change', () => {
    imagenMeme.style.filter = `brightness(${filtrosRangos[0].value})`;
})

// ** Opacidad

filtrosRangos[1].addEventListener('change', () => imagenMeme.style.opacity = filtrosRangos[1].value)

// ** Contraste - ver

filtrosRangos[2].addEventListener('change', () => imagenMeme.style.filter = `contrast(${filtrosRangos[2].value}%)`
)

// ** Desenfoque

filtrosRangos[3].addEventListener('change', () => imagenMeme.style.filter = `blur(${filtrosRangos[3].value}px)`)

// ** Escala de grises

filtrosRangos[4].addEventListener('change', () => imagenMeme.style.filter = `grayscale(${filtrosRangos[4].value}%)`
)

// ** Sepia

filtrosRangos[5].addEventListener('change', () => imagenMeme.style.filter = `sepia(${filtrosRangos[5].value}%)`
)

// ** Hue

filtrosRangos[6].addEventListener('change', () => imagenMeme.style.filter = `hue-rotate(${filtrosRangos[6].value}deg)`
)

// ** Saturado

filtrosRangos[7].addEventListener('change', () => imagenMeme.style.filter = `saturate(${filtrosRangos[7].value}%)`
)

// ** Negativo

filtrosRangos[8].addEventListener('change', () => imagenMeme.style.filter = `invert(${filtrosRangos[8].value})`
)

// ** Restablecer filtros - revisar

const restrablecerFiltros = document.getElementById('restablecer-filtros');

const filtrosMeme = () => {
    imagenMeme.style.filter = `brightness(${filtrosRangos[0].value}) opacity(${filtrosRangos[1].value}%) contrast(${filtrosRangos[2].value}%) blur(${filtrosRangos[3].value}px) grayscale(${filtrosRangos[4].value}%) sepia(${filtrosRangos[5].value}%) hue-rotate(${filtrosRangos[6].value}deg) saturate(${filtrosRangos[7].value}%) invert(${filtrosRangos[8].value})`
}

restrablecerFiltros.addEventListener('click', (e) => {
    e.preventDefault();
    filtrosRangos[0].value = '1';
    filtrosRangos[1].value = '1';
    filtrosRangos[2].value = '100';
    filtrosRangos[3].value = '0';
    filtrosRangos[4].value = '0';
    filtrosRangos[5].value = '0';
    filtrosRangos[6].value = '0';
    filtrosRangos[7].value = '100';
    filtrosRangos[8].value = '0';
    filtrosMeme();
    
})


// ************** Fin de funcionalidades de imagen **********************

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


// Tipo de fuente

const opcionFuente = document.getElementById('opcion-fuente');

opcionFuente.addEventListener('change', () => {
    textoSuperior.style.fontFamily = `${opcionFuente.value}`;
    textoInferior.style.fontFamily = `${opcionFuente.value}`;
})


// Tamaño de la fuente 

const inputTamano = document.getElementById('input-tamano');

inputTamano.addEventListener('keyup', () => {
    textoSuperior.style.fontSize = `${inputTamano.value}px`;
    textoInferior.style.fontSize = `${inputTamano.value}px`;
})


// Alineación de la letra

const izquierda = document.getElementById('izquierda');
const centro = document.getElementById('centro');
const derecha = document.getElementById('derecha');

izquierda.addEventListener('click', (e) => {
    e.preventDefault();
    textoSuperior.style.textAlign = 'left';
    textoInferior.style.textAlign = 'left';
})

centro.addEventListener('click', (e) => {
    e.preventDefault();
    textoSuperior.style.textAlign = 'center';
    textoInferior.style.textAlign = 'center';
})

derecha.addEventListener('click', (e) => {
    e.preventDefault();
    textoSuperior.style.textAlign = 'right';
    textoInferior.style.textAlign = 'right';
})

// Color de la letra

const colorLetra = document.getElementById('color-letra');

 colorLetra.addEventListener('input', () => {
    textoSuperior.style.color = colorLetra.value;
    textoInferior.style.color = colorLetra.value;
 })


//  Color de fondo de la letra

const colorFondo = document.getElementById('color-fondo');

colorFondo.addEventListener('input', () => {
    espacioSuperior.style.backgroundColor = colorFondo.value;
    espacioInferior.style.backgroundColor = colorFondo.value;
})

// Fondo transparente . revisar, no es la función

const checkSinFondo = document.getElementById('check-sin-fondo');

checkSinFondo.addEventListener('click', () => {
    if (checkSinFondo.checked){
    espacioSuperior.style.backgroundColor = 'transparent'
    espacioInferior.style.backgroundColor = 'transparent'
    } else {
        espacioSuperior.style.backgroundColor = colorFondo.value;
        espacioInferior.style.backgroundColor = colorFondo.value;
    }
       
})

// Contorno

const sinContorno = document.getElementById('sin-contorno');
const contornoClaro = document.getElementById('contorno-claro');
const contornoOscuro = document.getElementById('contorno-oscuro');

contornoOscuro.addEventListener('click', (e) => {
    e.preventDefault();
    textoSuperior.classList.add('contorno-negro'); 
    textoInferior.classList.add('contorno-negro'); 
})

contornoClaro.addEventListener('click', (e) => {
    e.preventDefault();
    textoSuperior.classList.remove('contorno-negro');
    textoSuperior.classList.add('contorno-blanco'); 
    textoInferior.classList.remove('contorno-negro');
    textoInferior.classList.add('contorno-blanco'); 
})

sinContorno.addEventListener('click', (e) => {
    e.preventDefault();
    textoSuperior.classList.remove('contorno-negro'); 
    textoSuperior.classList.remove('contorno-blanco'); 
    textoInferior.classList.remove('contorno-negro'); 
    textoInferior.classList.remove('contorno-blanco'); 
})

// Espaciado

const espaciado = document.getElementById('espaciado');

espaciado.addEventListener('keyup', () => {
    textoSuperior.style.paddingTop = `${espaciado.value}px`;
    textoSuperior.style.paddingBottom = `${espaciado.value}px`;
    textoInferior.style.paddingTop = `${espaciado.value}px`;
    textoInferior.style.paddingBottom = `${espaciado.value}px`;
}
)

// Interlineado

const interlineado = document.getElementById('interlineado');

interlineado.addEventListener('change', () => {
    textoSuperior.style.lineHeight = interlineado.value;
    textoInferior.style.lineHeight = interlineado.value;
})


// ************** Fin de funcionalidades de texto **********************
