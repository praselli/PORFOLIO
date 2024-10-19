function expandSection(sectionId) {
    const bars = document.querySelectorAll('.bar');
    const container = document.querySelector('.container');
    const headerHeight = Array.from(bars).reduce((acc, bar) => acc + bar.clientHeight, 0);

    bars.forEach(bar => {
        const content = bar.querySelector('.content');
        if (bar.id === sectionId) {
            if (bar.classList.contains('expanded')) {
                bar.classList.remove('expanded');
                content.style.maxHeight = null;
                container.style.overflow = 'hidden';
            } else {
                bar.classList.add('expanded');
                const availableHeight = window.innerHeight - headerHeight;
                content.style.maxHeight = (availableHeight - bar.clientHeight) + "px";
                container.style.overflow = 'auto';
            }
        } else {
            bar.classList.remove('expanded');
            content.style.maxHeight = null;
        }
    });
}


/* -------- MENU POP-UP -----------*/

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
