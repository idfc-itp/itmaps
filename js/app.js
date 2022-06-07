//Variables y/o selectores
let year = document.querySelector('.footer__year');
const formularioDirectorio = document.querySelector('.formulario__directorio');
const formularioMapa = document.querySelector('.formulario__mapa');
const deptos = document.querySelectorAll('.depto a');
const mapaResultado = document.querySelector('.mapa__resultado');
const mapaImg = document.querySelector('.mapa__img');

const secciones = document.querySelector('.secciones');
const mapa = document.querySelector('.mapa__content');
let volver = [];

let ubicacionObj = {
    id: '',
    url: './img/mapa.jpg'
}

document.addEventListener('click', e =>{
    ubicacionObj.id = e.target.dataset.depto;
    if(e.target.classList.contains('depto__boton')){
        const inputMapa = document.querySelector('.formulario__mapa .formulario__input');
        inputMapa.value = ubicacionObj.id;
        inputMapa.value = inputMapa.value.charAt(0).toUpperCase() + inputMapa.value.slice(1);
        formularioMapa.addEventListener('submit', validarMapa);
    }
})

//Event Listeners
window.onload = ()=>{
    sr.reveal('.info__grid', {delay: 400});
    sr.reveal(mapa, {delay: 800, origin: 'bottom'});
    sr.reveal(secciones, {delay: 800, origin: 'top'});
    mapaResultado.addEventListener('click', zoomMapa);
}

formularioDirectorio.addEventListener('submit', validarFormulario);

formularioMapa.addEventListener('submit', validarMapa);

year.textContent = new Date().getFullYear();

// MixitUp 
let mixerPortfolio = mixitup('.secciones', {
    selectors: {
        target: '.depto'
    },
    animation: {
        duration: 400
    }
});
// ScrollReveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: 1000,
    delay: 400,
});

/* Link active */ 
const linkActive = document.querySelectorAll('.navegacion__opcion');
function activeLink(){
    linkActive.forEach(link=>link.classList.remove('navegacion__opcion-activo'))
    this.classList.add('navegacion__opcion-activo');
}
linkActive.forEach(link => link.addEventListener('click', activeLink));

// Funciones

//Función para validar el formulario del directorio
function validarFormulario(e){
    e.preventDefault();
    const input = document.querySelector('.formulario__directorio .formulario__input');
    // input.value = input.value.toLowerCase();
    if(input.value === ''){
        mostrarAlerta('Este campo es obligatorio', document.querySelector('.directorio__alerta'));
        return;
    }
    input.value = input.value.toLowerCase();
    input.value = input.value.trim();
    input.value = input.value.replace('á', 'a');
    input.value = input.value.replace('é', 'e');
    input.value = input.value.replace('í', 'i');
    input.value = input.value.replace('ó', 'o');
    input.value = input.value.replace('ú', 'u');
    input.value = input.value.replace(' ', '');
    for(let depto of deptos){
        const divDepto = depto.parentElement.parentElement;
        if(depto.dataset.depto === input.value){
            limpiarHTML(secciones);
            secciones.classList.add('.remove-grid');
            divDepto.classList.add('.w-80');
            secciones.appendChild(divDepto);
            sr.reveal(divDepto, {delay: 500});
            input.value='';
                sr.reveal(mapa);
            break;
        }else{
            if(depto === deptos[deptos.length -1]){
                mostrarAlerta('Término de búsqueda no válido, intenta probando otro', document.querySelector('.directorio__alerta'));
                input.value="";
            }
        }
    }
    setTimeout(() => {
        limpiarHTML(secciones);
        for(let depto of deptos){
            const divDepto = depto.parentElement.parentElement;
            secciones.appendChild(divDepto);
            sr.reveal(secciones, {delay: 500});
        }
    }, 7000);
}
function zoomMapa(){
    const scales = document.querySelectorAll('.scale');
    if(scales.length === 0){
        mapaImg.classList.add('scale');   
        return;
    }
    mapaImg.classList.remove('scale');
}
//Función que valida el formulario del mapa y muestra el contenido deseado
function validarMapa(e){
    e.preventDefault();
    let formularioInput = document.querySelector('.formulario__mapa .formulario__input');
    formularioInput.value = formularioInput.value.toLowerCase();
    formularioInput.value = formularioInput.value.trim();
    formularioInput.value = formularioInput.value.replace('á', 'a');
    formularioInput.value = formularioInput.value.replace('é', 'e');
    formularioInput.value = formularioInput.value.replace('í', 'i');
    formularioInput.value = formularioInput.value.replace('ó', 'o');
    formularioInput.value = formularioInput.value.replace('ú', 'u');
    formularioInput.value = formularioInput.value.replace(' ', '');
    if(formularioInput.value === ''){
        mostrarAlerta('Este campo es obligatorio', document.querySelector('.mapa__alerta'));
        formularioInput.value = '';
        return;
    }
    switch(formularioInput.value){
        case "direccion":
            mapaImg.src = './img/rutas/Dirección.jpg';
                sr.reveal(mapaResultado, {delay: 200});
        break;
        case "edificioac":
        case "sistemas":
            mapaImg.src = './img/rutas/Laboratorios de Informática.jpg';
                sr.reveal(mapaResultado, {delay: 200});
        break;
        case "contaduria":
            mapaImg.src = './img/contaduria.jpg';
                sr.reveal(mapaResultado, {delay: 200});
        break;
        case "serviciosescolares":
            mapaImg.src = './img/rutas/Servicios Escolares.jpg';
            sr.reveal(mapaResultado, {delay: 200});
        break;
        
        case "edificiou":
        case "centrodeinformacion":
            mapaImg.src = './img/rutas/Centro de Información.jpg';
            sr.reveal(mapaResultado, {delay: 200});
        break;

        case "audiovisual":
            mapaImg.src = './img/rutas/Audiovisual.jpg';
            sr.reveal(mapaResultado, {delay: 200});
        break;

        case "Serviciosyadministrativos":
            mapaImg.src = './img/rutas/Administrativo.jpg';
            sr.reveal(mapaResultado, {delay: 200});
        break;

        // case "administracion":
        //     mapaImg.src = './img/administracion.jpg';
        //     sr.reveal(mapaResultado, {delay: 200});
        // break;
       
        // case "arquitectura":
        //     mapaImg.src = './img/arquitectura.webp';
        //     sr.reveal(mapaResultado, {delay: 200});
        // break;

        // case "edificiot":
        //     mapaImg.src = './img/rutas/mapa_T.jpg';
        //     sr.reveal(mapaResultado, {delay: 200});
        // break;

        case "quimica":
        case "quimicageneral":
            mapaImg.src = './img/rutas/Química General.jpg';
            sr.reveal(mapaResultado, {delay: 200});
        break;

        // case "edificios":
        //     mapaImg.src = './img/rutas/mapa_s.jpg';
        //     sr.reveal(mapaResultado, {delay: 200});
        // break;

        // case "edificior":
        //     mapaImg.src = './img/rutas/mapa_r.jpg';
        //     sr.reveal(mapaResultado, {delay: 200});
        // break;

        case "edificioc":
            mapaImg.src = './img/rutas/Aulas C.jpg';
            sr.reveal(mapaResultado, {delay: 200});
        break;

        // case "edificiod":
        //     mapaImg.src = './img/rutas/Aulas D.jpg';
        //     sr.reveal(mapaResultado, {delay: 200});
        // break;

        // case "edificiop":
        //     mapaImg.src = './img/rutas/mapa_p.jpg';
        //     sr.reveal(mapaResultado, {delay: 200});
        // break;

        // case "edificiom":
        //     mapaImg.src = './img/rutas/mapa_m.jpg';
        //     sr.reveal(mapaResultado, {delay: 200});
        // break;

        // case "edificiok":
        //     mapaImg.src = './img/rutas/mapa_k.jpg';
        //     sr.reveal(mapaResultado, {delay: 200});
        // break;

        // case "edificioh":
        //     mapaImg.src = './img/rutas/mapa_H.jpg';
        //     sr.reveal(mapaResultado, {delay: 200});
        // break;

        // case "edificioe":
        //     mapaImg.src = './img/rutas/mapa_E.jpg';
        //     sr.reveal(mapaResultado, {delay: 200});
        // break;

        case "edificioaa":
        case "electromecanica":
            mapaImg.src = './img/rutas/Laboratorio de Electromecánica.jpg';
            sr.reveal(mapaResultado, {delay: 200});
        break;

        default: 
            mapaImg.src = './img/rutas/mapa.jpg'
            mostrarAlerta('No se encontró el destino deseado, intenta con otro', document.querySelector('.mapa__alerta'));
            formularioInput.value = '';
            sr.reveal(mapaResultado, {delay: 200});
        break;
    }
}

//Función que muestra un mensaje de error
function mostrarAlerta(mensaje, ubicacion){
    volver = secciones;
    const divAlerta = document.createElement('div');
    const alertas = document.querySelectorAll('.error');
    if(alertas.length === 0){
        divAlerta.textContent = mensaje;
        divAlerta.classList.add('error', 'alerta');
        ubicacion.appendChild(divAlerta);
        setTimeout(() => {
            divAlerta.remove();
        }, 10000);
    }
}
// Función que limpia el html previo
function limpiarHTML(ubicacion){
    while(ubicacion.firstChild){
        ubicacion.removeChild(ubicacion.firstChild);
    }
}