document.addEventListener('DOMContentLoaded', function() {
    const servicesContainer = document.getElementById('services-container');
    const searchBar = document.getElementById('search-bar');
    const modal = document.getElementById('modal');
    const closeModal = document.querySelector('.close');
    
    // Datos simulados de servicios
    const services = [
        { id: 1, tipodeservicio: 'Cambio de aceite', fechadeingreso: '2023-01-15', fechadesalida: '2023-01-20', costo: '1500 MXN', empleado: 'Juan Pérez', auto: 'Mazda Miata MX-5', estado: 'Completado' },
        { id: 2, tipodeservicio: 'Alineación y balanceo', fechadeingreso: '2023-02-10', fechadesalida: '2023-02-15', costo: '1200 MXN', empleado: 'Juan Pérez', auto: 'Nissan NP300', estado: 'En proceso' },
        { id: 3, tipodeservicio: 'Revisión de frenos', fechadeingreso: '2023-03-05', fechadesalida: '2023-03-10', costo: '1800 MXN', empleado: 'Juan Pérez', auto: 'Nissan Versa', estado: 'Cancelado' },
        { id: 4, tipodeservicio: 'Cambio de llantas', fechadeingreso: '2023-04-01', fechadesalida: '2023-04-03', costo: '3000 MXN', empleado: 'Juan Pérez', auto: 'Toyota Corolla', estado: 'Completado' },
        { id: 5, tipodeservicio: 'Reparación de motor', fechadeingreso: '2023-05-20', fechadesalida: '2023-05-30', costo: '5000 MXN', empleado: 'Juan Pérez', auto: 'Honda Civic', estado: 'En proceso' },
        { id: 6, tipodeservicio: 'Revisión general', fechadeingreso: '2023-06-10', fechadesalida: '2023-06-12', costo: '1000 MXN', empleado: 'Juan Pérez', auto: 'Ford Mustang', estado: 'Completado' },
        { id: 7, tipodeservicio: 'Cambio de batería', fechadeingreso: '2023-07-15', fechadesalida: '2023-07-15', costo: '800 MXN', empleado: 'Juan Pérez', auto: 'Chevrolet Camaro', estado: 'Cancelado' },
        { id: 8, tipodeservicio: 'Pintura', fechadeingreso: '2023-08-01', fechadesalida: '2023-08-10', costo: '4500 MXN', empleado: 'Juan Pérez', auto: 'BMW X5', estado: 'En proceso' },
        { id: 9, tipodeservicio: 'Reparación de aire acondicionado', fechadeingreso: '2023-09-05', fechadesalida: '2023-09-07', costo: '2000 MXN', empleado: 'Juan Pérez', auto: 'Audi A4', estado: 'Completado' },
        { id: 10, tipodeservicio: 'Cambio de amortiguadores', fechadeingreso: '2023-10-10', fechadesalida: '2023-10-12', costo: '2500 MXN', empleado: 'Juan Pérez', auto: 'Mercedes-Benz C-Class', estado: 'En proceso' },
        { id: 11, tipodeservicio: 'Revisión de transmisión', fechadeingreso: '2023-11-01', fechadesalida: '2023-11-05', costo: '3500 MXN', empleado: 'Juan Pérez', auto: 'Volkswagen Golf', estado: 'Cancelado' },
        { id: 12, tipodeservicio: 'Cambio de bujías', fechadeingreso: '2023-12-15', fechadesalida: '2023-12-16', costo: '600 MXN', empleado: 'Juan Pérez', auto: 'Mazda CX-5', estado: 'Completado' },
    ];

    // Función para crear y mostrar los elementos de servicio
    function loadServices(filteredServices = services) {
        servicesContainer.innerHTML = '';
        filteredServices.forEach(service => {
            const serviceItem = document.createElement('div');
            serviceItem.classList.add('service-item');
            serviceItem.innerHTML = `
                <h3>${service.tipodeservicio}</h3>
                <p>Fecha de ingreso: ${service.fechadeingreso}</p>
                <p>Fecha de salida: ${service.fechadesalida}</p>
                <p>Estado: ${service.estado}</p>
            `;
            serviceItem.addEventListener('click', () => showServiceDetails(service));
            servicesContainer.appendChild(serviceItem);
        });
    }

    // Función para mostrar los detalles del servicio en un modal
    function showServiceDetails(service) {
        document.getElementById('modal-tipodeservicio').innerText = `Tipo de Servicio: ${service.tipodeservicio}`;
        document.getElementById('modal-id').innerText = `ID: ${service.id}`;
        document.getElementById('modal-fechadeingreso').innerText = `Fecha de Ingreso: ${service.fechadeingreso}`;
        document.getElementById('modal-fechadesalida').innerText = `Fecha de Salida: ${service.fechadesalida}`;
        document.getElementById('modal-costo').innerText = `Costo: ${service.costo}`;
        document.getElementById('modal-empleado').innerText = `Empleado: ${service.empleado}`;
        document.getElementById('modal-auto').innerText = `Auto: ${service.auto}`;
        document.getElementById('modal-estado').innerText = `Estado: ${service.estado}`;
        modal.style.display = 'block';
    }

    // Función para cerrar el modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Cerrar el modal al hacer clic fuera del contenido del modal
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    // Función para filtrar los servicios según el texto ingresado en el campo de búsqueda
    searchBar.addEventListener('input', function() {
        const searchText = searchBar.value.toLowerCase();
        const filteredServices = services.filter(service =>
            service.tipodeservicio.toLowerCase().includes(searchText)
        );
        loadServices(filteredServices);
    });

    // Cargar los servicios al cargar la página
    loadServices();
});
