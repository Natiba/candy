document.getElementById('icon-menu').addEventListener('click', mostrar_menu);

function mostrar_menu() {
    document.getElementById('move-content').classList.toggle('move-container-all')
}




// Buscador de Contenido

// Ejecutando funciones:

document.getElementById('icon-search').addEventListener('click', show_search); 
document.getElementById('back-ctn-search').addEventListener('click', hide_search);

// Declaro mis variables:

let ctnBarsSearch = document.getElementById('ctn-bars-search');
let backCtnSearch = document.getElementById('back-ctn-search');
 let inputSearch = document.getElementById('inputSearch');
 console.log(inputSearch);
let boxSearch = document.getElementById('box-search');

// Funcion para mostrar el buscador:

function show_search() {

ctnBarsSearch.style.top = '140px'; //para que baje xq lo tengo escondido arriba 
backCtnSearch.style.display = 'block'; //para que aparezca el fondo translucido negro
inputSearch.focus(); //para que funcione la barra al tipear
if (inputSearch.value === '') {
    boxSearch.style.display = 'none'; 
}

}

// Funcion para ocultar el buscador:

function hide_search() {

    ctnBarsSearch.style.top = '-10px'; //para que suba y lo esconda nuevamente arriba 
    backCtnSearch.style.display = 'none'; //para que tambien se oculte el fondo translucido
    inputSearch.value = '';  //esto es para que el valor del input quede vacio al volver a abrir el buscador 
    box_search.style.display = 'none';
}

// Creando filtrado de busqueda:

document.getElementById('inputSearch').addEventListener('keyup', internal_search); 

function internal_search() {

filter = inputSearch.value. toUpperCase();
li = boxSearch.getElementsByTagName('li');

//Recorriendo elementos a filtrar mediante los li

for(i = 0; i < li.lenght; i++) {

    a = li[i].getElementsByTagName('a')[0];
    textValue = a.textContent || a.innerText;
     
    if(textValue.toUpperCase().indexOf(filter) > -1) {

    li[i].style.display = '';
    boxSearch.style.display = 'block';
   }
   if (inputSearch.value === '') {
       boxSearch.style.display = 'none'; 
   }
     else {
         li[i].style.display = 'none';
     }

}

} 

// Esto era para lupa:

// No necesitas Javascript para que esto funcione. Pero creo que una cosa que sí te vendría bien es que, al pulsar sobre el <div>, lleves el foco de la aplicación dentro del campo input.

// document.querySelector('.input-icono').addEventListener('click', function() {
//     this.querySelector('input').focus();
// });