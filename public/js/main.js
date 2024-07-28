document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-bar');
    const serviceContainer = document.getElementById('services-container');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalMarcaModelo = document.getElementById('modal-Marca_Modelo');
    const modalTipoauto = document.getElementById('modal-Tipoauto');
    const modalNumeroserie = document.getElementById('modal-Numeroserie');
    const modalAnio = document.getElementById('modal-Anio');
    const modalCilindros = document.getElementById('modal-Cilindros');
    const modalDisponibilidad = document.getElementById('modal-Disponibilidad');
    const modalPrecio = document.getElementById('modal-Precio');
    const modalCantidadpuertas = document.getElementById('modal-Cantidadpuertas');
    const modalColor = document.getElementById('modal-Color');
    const modalGarantia = document.getElementById('modal-Garantia');
    const modalDescuentos = document.getElementById('modal-Descuentos');
    const modalNumeroseguro = document.getElementById('modal-Numeroseguro');
    const closeBtn = document.querySelector('.close');
    const saleBtn = document.getElementById('sale-btn');

    let selectedCarTitle = '';

    // Datos simulados de los autos
    const cars = [
        {
            Imagen: './images/miata.jpg',
            Marca: 'Mazda',
            Modelo: 'Miata MX-5',
            Numeroserie: 12345,
            Tipoauto: 'Deportivo',
            Anio: 2021,
            Cilindros: 4,
            Disponibilidad: 'Sí',
            Precio: 35000.00,
            Cantidadpuertas: 2,
            Color: 'Rojo',
            Garantia: '5 años',
            Descuentos: 2000.00,
            Numeroseguro: 98765
        },
        {
            Imagen: './images/NP300.jpg',
            Marca: 'Nissan',
            Modelo: 'NP300',
            Numeroserie: 67890,
            Tipoauto: 'Pickup',
            Anio: 2020,
            Cilindros: 4,
            Disponibilidad: 'Sí',
            Precio: 25000.00,
            Cantidadpuertas: 4,
            Color: 'Blanco',
            Garantia: '3 años',
            Descuentos: 1500.00,
            Numeroseguro: 87654
        },
        {
            Imagen: './images/versa.jpg',
            Marca: 'Nissan',
            Modelo: 'Versa',
            Numeroserie: 11223,
            Tipoauto: 'Sedán',
            Anio: 2019,
            Cilindros: 4,
            Disponibilidad: 'No',
            Precio: 20000.00,
            Cantidadpuertas: 4,
            Color: 'Azul',
            Garantia: '2 años',
            Descuentos: 1000.00,
            Numeroseguro: 44321
        },
        {
            Imagen: './images/aveo.jpg',
            Marca: 'Chevrolet',
            Modelo: 'Aveo',
            Numeroserie: 44556,
            Tipoauto: 'Sedán',
            Anio: 2018,
            Cilindros: 4,
            Disponibilidad: 'Sí',
            Precio: 18000.00,
            Cantidadpuertas: 4,
            Color: 'Negro',
            Garantia: '3 años',
            Descuentos: 800.00,
            Numeroseguro: 66554
        },
        {
            Imagen: './images/sentra.jpg',
            Marca: 'Nissan',
            Modelo: 'Sentra',
            Numeroserie: 77889,
            Tipoauto: 'Sedán',
            Anio: 2021,
            Cilindros: 4,
            Disponibilidad: 'Sí',
            Precio: 22000.00,
            Cantidadpuertas: 4,
            Color: 'Gris',
            Garantia: '4 años',
            Descuentos: 1500.00,
            Numeroseguro: 98765
        }
    ];

    // Generar dinámicamente las tarjetas de autos
    cars.forEach(car => {
        const carItem = document.createElement('div');
        carItem.className = 'service-item bounce-in';
        carItem.dataset.Marca_Modelo = `${car.Marca} ${car.Modelo}`;
        carItem.dataset.Tipoauto = car.Tipoauto;
        carItem.dataset.Numeroserie = car.Numeroserie;
        carItem.dataset.Anio = car.Anio;
        carItem.dataset.Cilindros = car.Cilindros;
        carItem.dataset.Disponibilidad = car.Disponibilidad;
        carItem.dataset.Precio = car.Precio;
        carItem.dataset.Cantidadpuertas = car.Cantidadpuertas;
        carItem.dataset.Color = car.Color;
        carItem.dataset.Garantia = car.Garantia;
        carItem.dataset.Descuentos = car.Descuentos;
        carItem.dataset.Numeroseguro = car.Numeroseguro;

        carItem.innerHTML = `
            <img src="${car.Imagen}" alt="${car.Marca} ${car.Modelo}">
            <h3>${car.Marca} ${car.Modelo}</h3>
        `;

        serviceContainer.appendChild(carItem);

        carItem.addEventListener('click', function() {
            modalImg.src = car.Imagen;
            modalMarcaModelo.textContent = `${car.Marca} ${car.Modelo}`;
            modalTipoauto.textContent = `Tipo de auto: ${car.Tipoauto}`;
            modalNumeroserie.textContent = `Número de serie: ${car.Numeroserie}`;
            modalAnio.textContent = `Año: ${car.Anio}`;
            modalCilindros.textContent = `Cilindros: ${car.Cilindros}`;
            modalDisponibilidad.textContent = `Disponibilidad: ${car.Disponibilidad}`;
            modalPrecio.textContent = `Precio: $${car.Precio}`;
            modalCantidadpuertas.textContent = `Cantidad de puertas: ${car.Cantidadpuertas}`;
            modalColor.textContent = `Color: ${car.Color}`;
            modalGarantia.textContent = `Garantía: ${car.Garantia}`;
            modalDescuentos.textContent = `Descuento: $${car.Descuentos}`;
            modalNumeroseguro.textContent = `Número de seguro: ${car.Numeroseguro}`;

            selectedCarTitle = `${car.Marca} ${car.Modelo}`;

            modal.style.display = 'flex';
            
            // Store car details in localStorage
            localStorage.setItem('vehicleImg', car.Imagen);
            localStorage.setItem('vehicleTitle', `${car.Marca} ${car.Modelo}`);
            localStorage.setItem('vehicleTipoauto', car.Tipoauto);
            localStorage.setItem('vehicleNumeroserie', car.Numeroserie);
            localStorage.setItem('vehicleAnio', car.Anio);
            localStorage.setItem('vehicleCilindros', car.Cilindros);
            localStorage.setItem('vehicleDisponibilidad', car.Disponibilidad);
            localStorage.setItem('vehiclePrecio', car.Precio);
            localStorage.setItem('vehicleCantidadpuertas', car.Cantidadpuertas);
            localStorage.setItem('vehicleColor', car.Color);
            localStorage.setItem('vehicleGarantia', car.Garantia);
            localStorage.setItem('vehicleDescuentos', car.Descuentos);
            localStorage.setItem('vehicleNumeroseguro', car.Numeroseguro);
        });
    });

    // Filtro de búsqueda
    searchInput.addEventListener('keyup', function() {
        const filter = searchInput.value.toLowerCase();
        document.querySelectorAll('.service-item').forEach(item => {
            const text = item.textContent.toLowerCase();
            if (text.includes(filter)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
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
        window.location.href = 'realizarVenta.html';
    });
});
