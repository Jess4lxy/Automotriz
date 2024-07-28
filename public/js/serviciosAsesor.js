document.addEventListener('DOMContentLoaded', function() {
    const servicesContainer = document.getElementById('services-container');

    // Aquí simulo algunos servicios para mostrar en la página
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

    function renderServices() {
        servicesContainer.innerHTML = '';
        services.forEach(service => {
            const serviceItem = document.createElement('div');
            serviceItem.className = 'service-item';

            serviceItem.innerHTML = `
                <h3>${service.tipodeservicio}</h3>
                <p>Ingreso: ${service.fechadeingreso}</p>
                <p>Salida: ${service.fechadesalida}</p>
                <p>Costo: ${service.costo}</p>
                <p>Empleado: ${service.empleado}</p>
                <p>Auto: ${service.auto}</p>
                <p>Estado: ${service.estado}</p>
                <button class="edit-btn" data-id="${service.id}">Editar</button>
                <button class="delete-btn" data-id="${service.id}">Eliminar</button>
            `;

            servicesContainer.appendChild(serviceItem);
        });
    }

    renderServices();

    // Redirigir al formulario para agregar servicios
    document.getElementById('add-service-btn').addEventListener('click', function() {
        window.location.href = 'agregarServicio.html';
    });

    // Manejar el clic en el botón de editar
    servicesContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('edit-btn')) {
            const serviceId = event.target.getAttribute('data-id');
            window.location.href = `editarServicio.html?id=${serviceId}`;
        }

        // Manejar el clic en el botón de eliminar
        if (event.target.classList.contains('delete-btn')) {
            const serviceId = event.target.getAttribute('data-id');
            const confirmDelete = confirm('¿Está seguro de que desea eliminar este servicio?');
            if (confirmDelete) {
                // Eliminar el servicio del array
                // este apartado solo es temporal, cambialo para la conexion a backend
                const serviceIndex = services.findIndex(service => service.id == serviceId);
                if (serviceIndex !== -1) {
                    services.splice(serviceIndex, 1);
                    renderServices();
                }
            }
        }
    });
});
