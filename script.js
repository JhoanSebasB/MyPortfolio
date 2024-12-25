
// Se ejecuta cuando el documento HTML se ha cargado completamente
$(document).ready(function () {
    // Agrega la clase 'effect' a elementos con la clase 'page-load'
    $('.page-load').addClass('effect');
    // Elimina la clase 'effect' de elementos con la clase 'page-loaded'
    $('.page-loaded').removeClass('effect');
    // Inicializa la variable 'atual' con el valor '#home'
    var atual = '#home';
    // Agrega la clase 'active' a elementos de navegación relacionados con 'atual'
    $(atual+'-nav').addClass('active');
    $(atual+'-ball').addClass('active');
    
    // Llama a la función 'typeWriter' para animación de escritura de texto
    const titulo = document.querySelector('.write');
    typeWriter(titulo);
    
    // Cierra la barra de navegación en pantallas pequeñas al hacer clic en un enlace
    $('.navbar-collapse a[href^="#"]').on('click', function (e) {
        setTimeout(function () {
            // Si la barra de navegación está desplegada, la cierra
            if ($('.navbar-toggle').css('display') != 'none') $('.navbar-toggle').trigger("click");
        }, 1000);
    });
    
    // Maneja el comportamiento cuando se hace clic en un enlace en la página
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault(); // Evita el comportamiento predeterminado de navegación
        
        var id = $(this).attr('href'); // Obtiene el valor del atributo 'href' del enlace
        if (id == "#") id = "#home"; // Si el enlace es '#', lo cambia a '#home'
        
        // Oculta la sección actual y desactiva los elementos de navegación relacionados
        $('.full-size'+atual).addClass('achatado');
        $(atual+'-nav').removeClass('active');
        $(atual+'-ball').removeClass('active');
        
        atual = id; // Actualiza 'atual' con el nuevo valor 'id'
        
        // Muestra la nueva sección y activa los elementos de navegación relacionados
        $('.full-size'+atual).removeClass('achatado');
        $(atual+'-nav').addClass('active');
        $(atual+'-ball').addClass('active');
        
        $('html, body').scrollTop(0); // Desplaza la página al principio
    });
});

// Función para el efecto de escribir "web designer | programmer"
function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '&nbsp;';

    setTimeout(function () {
      elemento.innerHTML = '';
      textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 85 * i)
      });
    }, 100);
}


new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween:30,
  
    // Pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
      
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    breakpoints:{
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
  });
