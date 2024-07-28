document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-bar');
    const serviceItems = document.querySelectorAll('.service-item');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const closeBtn = document.querySelector('.close');
    const saleBtn = document.getElementById('sale-btn');

    // Filtro de búsqueda
    searchInput.addEventListener('keyup', function() {
        const filter = searchInput.value.toLowerCase();
        serviceItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            if (text.includes(filter)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });

    // Abrir modal con la información del vehículo
    serviceItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = item.querySelector('img').src;
            const title = item.querySelector('h3').textContent;
            const description = item.getAttribute('data-description');

            modalImg.src = imgSrc;
            modalTitle.textContent = title;
            modalDescription.textContent = description;

            modal.style.display = 'flex';
        });
    });

    // Cerrar el modal al hacer clic en el botón de cierre
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Cerrar el modal al hacer clic fuera del contenido del modal
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Redirigir a la pantalla de venta del auto seleccionado
    saleBtn.addEventListener('click', function() {
        const imgSrc = modalImg.src;
        const title = modalTitle.textContent;
        const description = modalDescription.textContent;

        localStorage.setItem('vehicleTitle', title);
        localStorage.setItem('vehicleImg', imgSrc);
        localStorage.setItem('vehicleDescription', description);

        window.location.href = 'realizarVenta.html';
    });
});
