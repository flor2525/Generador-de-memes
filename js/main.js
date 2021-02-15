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

cierreAside.addEventListener('click',() => {
    aside.style.display = 'none';
    formularioTexto.style.display = 'none';
    formularioImagen.style.display = 'none';
})


// ************** Botón modo claro/modo oscuro **********************

const botonModoClaro = document.getElementById('boton-modo-claro');
const botonModoOscuro = document.getElementById('boton-modo-oscuro');

botonModoClaro.addEventListener('click', () => {
    botonModoClaro.classList.add('ocultar');
    botonModoOscuro.classList.remove('ocultar');
    document.body.classList.add('modo-oscuro');
})

botonModoOscuro.addEventListener('click', () => {
    botonModoOscuro.classList.add('ocultar');
    botonModoClaro.classList.remove('ocultar');
    document.body.classList.remove('modo-oscuro');
})


// ************** Descarga de meme **********************

const botonDescarga = document.getElementById('boton-descarga');
const memeCanvas = document.getElementById('meme-canvas');


const descargarImagen = () => {
    domtoimage.toBlob(memeCanvas)
        .then(function (blob) {
            saveAs(blob,'meme.png');
        });
}

botonDescarga.addEventListener('click', () => descargarImagen())



// ************** Funcionalidades de imagen **********************

const espacioSuperior = document.getElementById('espacio-superior');
const imagenMeme = document.getElementById('imagen-meme');
const espacioInferior = document.getElementById('espacio-inferior');
const propiedadFondo = document.getElementById('propiedad-fondo');
const filtrosRangos = document.getElementsByClassName('input-rango');
const url = document.getElementById('url');
const fondoColor = document.getElementById('fondo-color');
const codigoColorimagen = document.getElementById('código-color-imagen');
const restrablecerFiltros = document.getElementById('restablecer-filtros');


// URL


url.addEventListener('keyup', () => {
    const urlImg = url.value;
    imagenMeme.style.backgroundImage = `url("${urlImg}")`;
    imagenMeme.classList.add('imagen-fondo');

})

// Fondo

fondoColor.addEventListener('input', () => {
    imagenMeme.style.backgroundColor = fondoColor.value;
    codigoColorimagen.innerHTML = `${fondoColor.value}`;
})

// Mix blend de fondo

propiedadFondo.addEventListener('change', () => imagenMeme.style.mixBlendMode = propiedadFondo.value)

// Filtros rangos

const filtrosMeme = () => {
    imagenMeme.style.filter = `brightness(${filtrosRangos[0].value}) opacity(${filtrosRangos[1].value}) contrast(${filtrosRangos[2].value}%) blur(${filtrosRangos[3].value}px) grayscale(${filtrosRangos[4].value}%) sepia(${filtrosRangos[5].value}%) hue-rotate(${filtrosRangos[6].value}deg) saturate(${filtrosRangos[7].value}%) invert(${filtrosRangos[8].value})`;
}

filtrosRangos[0].addEventListener('change', filtrosMeme);
filtrosRangos[1].addEventListener('change', filtrosMeme);
filtrosRangos[2].addEventListener('change', filtrosMeme);
filtrosRangos[3].addEventListener('change', filtrosMeme);
filtrosRangos[4].addEventListener('change', filtrosMeme);
filtrosRangos[5].addEventListener('change', filtrosMeme);
filtrosRangos[6].addEventListener('change', filtrosMeme);
filtrosRangos[7].addEventListener('change', filtrosMeme);
filtrosRangos[8].addEventListener('change', filtrosMeme);


// Reestablecer filtros 

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
const opcionFuente = document.getElementById('opcion-fuente');
const inputTamano = document.getElementById('input-tamano');
const izquierda = document.getElementById('izquierda');
const centro = document.getElementById('centro');
const derecha = document.getElementById('derecha');
const colorLetra = document.getElementById('color-letra');
const colorFondo = document.getElementById('color-fondo');
const codigoColorTexto = document.getElementsByClassName('código-color-texto');
const checkSinFondo = document.getElementById('check-sin-fondo');
const sinContorno = document.getElementById('sin-contorno');
const contornoClaro = document.getElementById('contorno-claro');
const contornoOscuro = document.getElementById('contorno-oscuro');
const espaciado = document.getElementById('espaciado');
const interlineado = document.getElementById('interlineado');



// Pintar texto en meme

textoSuperiorInput.addEventListener('keyup', () => textoSuperior.innerHTML = textoSuperiorInput.value);

textoInferiorInput.addEventListener('keyup', () => textoInferior.innerHTML = textoInferiorInput.value);

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

opcionFuente.addEventListener('change', () => {
    textoSuperior.style.fontFamily = `${opcionFuente.value}`;
    textoInferior.style.fontFamily = `${opcionFuente.value}`;
})


// Tamaño de la fuente 

inputTamano.addEventListener('input', () => {
    textoSuperior.style.fontSize = `${inputTamano.value}px`;
    textoInferior.style.fontSize = `${inputTamano.value}px`;
})

inputTamano.addEventListener('keyup', () => {
    textoSuperior.style.fontSize = `${inputTamano.value}px`;
    textoInferior.style.fontSize = `${inputTamano.value}px`;
})



// Alineación de la letra

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

const cambioColorDeLetra = () => {
    textoSuperior.style.color = colorLetra.value;
    textoInferior.style.color = colorLetra.value;
    codigoColorTexto[0].innerHTML = `${colorLetra.value}`;
}

colorLetra.addEventListener('input', () => cambioColorDeLetra());

//  colorLetra.addEventListener('input', () => {
//     textoSuperior.style.color = colorLetra.value;
//     textoInferior.style.color = colorLetra.value;
//     codigoColorTexto[0].innerHTML = `${colorLetra.value}`;
//  })


//  Color de fondo de la letra

const cambioColorFondoLetra = () => {
    espacioSuperior.style.backgroundColor = colorFondo.value;
    espacioInferior.style.backgroundColor = colorFondo.value;
    codigoColorTexto[1].innerHTML = `${colorFondo.value}`;
}

colorFondo.addEventListener('input', () => cambioColorFondoLetra());


// colorFondo.addEventListener('input', () => {
//     espacioSuperior.style.backgroundColor = colorFondo.value;
//     espacioInferior.style.backgroundColor = colorFondo.value;
//     codigoColorTexto[1].innerHTML = `${colorFondo.value}`;
// })

// Fondo transparente . revisar, no es la función


checkSinFondo.addEventListener('click', () => {
    if(checkSinFondo.checked){
    imagenMeme.style.backgroundSize = 'cover';
    espacioInferior.style.position = 'absolute';
    espacioInferior.style.backgroundColor = 'transparent';
    espacioInferior.style.marginTop = '33rem';
    espacioSuperior.style.position = 'absolute';
    espacioSuperior.style.backgroundColor = 'transparent';
    } else {
        espacioInferior.style.position = 'static';
        espacioSuperior.style.position = 'static';
        espacioInferior.style.marginTop = '0';
        cambioColorDeLetra()
        cambioColorFondoLetra()
    }      
})

// Contorno

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


espaciado.addEventListener('input', () => {
    textoSuperior.style.paddingTop = `${espaciado.value}px`;
    textoSuperior.style.paddingBottom = `${espaciado.value}px`;
    textoInferior.style.paddingTop = `${espaciado.value}px`;
    textoInferior.style.paddingBottom = `${espaciado.value}px`;
}
)

espaciado.addEventListener('keyup', () => {
    textoSuperior.style.paddingTop = `${espaciado.value}px`;
    textoSuperior.style.paddingBottom = `${espaciado.value}px`;
    textoInferior.style.paddingTop = `${espaciado.value}px`;
    textoInferior.style.paddingBottom = `${espaciado.value}px`;
}
)



// Interlineado

interlineado.addEventListener('change', () => {
    textoSuperior.style.lineHeight = interlineado.value;
    textoInferior.style.lineHeight = interlineado.value;
})


// ************** Fin de funcionalidades de texto **********************

