document.getElementById('icon-menu').addEventListener('click', mostrar_menu);

function mostrar_menu() {
    document.getElementById('move-content').classList.toggle('move-container-all')
}


// Esto era para lupa:

// No necesitas Javascript para que esto funcione. Pero creo que una cosa que sí te vendría bien es que, al pulsar sobre el <div>, lleves el foco de la aplicación dentro del campo input.

// document.querySelector('.input-icono').addEventListener('click', function() {
//     this.querySelector('input').focus();
// });