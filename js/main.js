// /* ---------------------- BARRAS EXPANSIBLES  ------------------------------*/

// const clickableAreas = document.querySelectorAll('.clickable-area');

// clickableAreas.forEach(area => {
//     area.addEventListener('click', (event) => {
//         event.stopPropagation();
        
//         const column = area.closest('.column');
        
//         if (window.innerWidth < 768) {
//             // Para resoluciones menores a 768px (vertical)
//             if (column.classList.contains('expanded_vertical')) {
//                 column.classList.remove('expanded_vertical');
//             } else {
//                 document.querySelectorAll('.column').forEach(col => col.classList.remove('expanded_vertical'));
//                 column.classList.add('expanded_vertical');
//             }
//         } else {
//             // Para resoluciones mayores a 768px (horizontal, código existente)
//             if (column.classList.contains('expanded')) {
//                 column.classList.remove('expanded');
//             } else {
//                 document.querySelectorAll('.column').forEach(col => col.classList.remove('expanded'));
//                 column.classList.add('expanded');
//             }
//         }
//     });
// });

document.addEventListener("DOMContentLoaded", () => {
    const profileColumn = document.querySelector('#profile');
    const clickableAreas = document.querySelectorAll('.clickable-area');

    // Expansión automática de "profile" al cargar
    if (profileColumn) {
        setTimeout(() => {
            if (window.innerWidth > 767) {
                profileColumn.classList.add('expanded');
            } else {
                profileColumn.classList.add('expanded_vertical');
            }
        }, 2000); // 2 segundos después de cargar la página
    }

    // Lógica de expansión y contracción de las barras
    clickableAreas.forEach(area => {
        area.addEventListener('click', (event) => {
            event.stopPropagation();

            const column = area.closest('.column');

            if (window.innerWidth < 768) {
                // Modo vertical (pantallas pequeñas)
                if (column.classList.contains('expanded_vertical')) {
                    column.classList.remove('expanded_vertical');
                } else {
                    document.querySelectorAll('.column').forEach(col => col.classList.remove('expanded_vertical'));
                    column.classList.add('expanded_vertical');
                }
            } else {
                // Modo horizontal (pantallas grandes)
                if (column.classList.contains('expanded')) {
                    column.classList.remove('expanded');
                } else {
                    document.querySelectorAll('.column').forEach(col => col.classList.remove('expanded'));
                    column.classList.add('expanded');
                }
            }
        });
    });
});



/* -------------------------------------- MENU POP-UP -----------------------------------------*/

document.addEventListener('DOMContentLoaded', () => {
    // Selecciona el ícono principal y los íconos del menú
    const logoIcon = document.querySelector('.logo_icon');
    const downloadIcon = document.querySelector('.download_icon_hide');
    const inIcon = document.querySelector('.in_icon_hide');
    const indexIcon = document.querySelector('.index_icon_hide');
    const menuDivisor = document.querySelector('.menu_divisor_hide');

    // Variable para rastrear el estado del menú
    let isMenuActive = false;

    // Función para alternar el menú
    logoIcon.addEventListener('click', () => {
        isMenuActive = !isMenuActive; // Cambia el estado

        // Alterna las clases de los íconos del menú
        if (isMenuActive) {
            // Activar el menú
            logoIcon.classList.remove('logo_icon');
            logoIcon.classList.add('logo_icon_active');

            downloadIcon.classList.remove('download_icon_hide');
            downloadIcon.classList.add('download_icon_active');

            inIcon.classList.remove('in_icon_hide');
            inIcon.classList.add('in_icon_active');

            indexIcon.classList.remove('index_icon_hide');
            indexIcon.classList.add('index_icon_active');

            menuDivisor.classList.remove('menu_divisor_hide');
            menuDivisor.classList.add('menu_divisor_active');
        } else {
            // Desactivar el menú
            logoIcon.classList.remove('logo_icon_active');
            logoIcon.classList.add('logo_icon');

            downloadIcon.classList.remove('download_icon_active');
            downloadIcon.classList.add('download_icon_hide');

            inIcon.classList.remove('in_icon_active');
            inIcon.classList.add('in_icon_hide');

            indexIcon.classList.remove('index_icon_active');
            indexIcon.classList.add('index_icon_hide');

            menuDivisor.classList.remove('menu_divisor_active');
            menuDivisor.classList.add('menu_divisor_hide');
        }
    });
});


/* ------------------------------------ PROJECTS IMAGES SLIDE ----------------------------------------*/

// Objeto para almacenar el índice actual de cada slider
const slideIndexes = {};

// Inicializar todos los sliders
document.querySelectorAll(".project_FrameTipe").forEach((slider) => {
    const sliderId = slider.getAttribute("data-slider-id");
    slideIndexes[sliderId] = 0; // Inicializa el índice para cada slider
    showSlide(sliderId, 0); // Muestra la primera imagen al cargar

    // Agregar eventos a los botones de cada slider
    const prevButton = slider.querySelector(".prev");
    const nextButton = slider.querySelector(".next");

    prevButton.addEventListener("click", () => changeSlide(-1, sliderId));
    nextButton.addEventListener("click", () => changeSlide(1, sliderId));
});

function showSlide(sliderId, index) {
    const slides = document.querySelectorAll(`[data-slider-id="${sliderId}"] .slide`);
    slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? "1" : "0";
    });
}

function changeSlide(step, sliderId) {
    const slides = document.querySelectorAll(`[data-slider-id="${sliderId}"] .slide`);
    slideIndexes[sliderId] = (slideIndexes[sliderId] + step + slides.length) % slides.length;
    showSlide(sliderId, slideIndexes[sliderId]);
}

