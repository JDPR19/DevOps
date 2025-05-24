
document.addEventListener('DOMContentLoaded', function() {
    const botones = document.querySelectorAll('.toggle-btn');
    const contenidos = document.querySelectorAll('.contenido');

    botones.forEach((boton, index) => {
        boton.addEventListener('click', function() {
            contenidos[index].style.display = contenidos[index].style.display === 'none' ||  contenidos[index].style.display === "" ? 'block' : 'none';
            boton.style.transform = boton.style.transform === 'rotate(90deg)' ? 'rotate(0deg)' : 'rotate(90deg)';
        });
    });
});