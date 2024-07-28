document.addEventListener('DOMContentLoaded', () => {
    // Aquí debes obtener el ID del servicio que deseas editar
    // Por simplicidad, se simula el servicio cargado
    const servicio = {
        id: 1,
        tipodeservicio: 'Cambio de aceite',
        fechadeingreso: '2023-01-15',
        fechadesalida: '2023-01-20',
        costo: '1500 MXN',
        auto: 'Mazda Miata MX-5',
        estado: 'Activo'
    };

    // Rellenar el formulario con los datos del servicio
    document.getElementById('tipodeservicio').value = servicio.tipodeservicio;
    document.getElementById('fechadeingreso').value = servicio.fechadeingreso;
    document.getElementById('fechadesalida').value = servicio.fechadesalida;
    document.getElementById('costo').value = servicio.costo;
    document.getElementById('auto').value = servicio.auto;
    document.getElementById('estado').value = servicio.estado;

    // Manejar el envío del formulario
    document.getElementById('editar-servicio-form').addEventListener('submit', (e) => {
        e.preventDefault();
        // Aquí debes implementar la lógica para actualizar el servicio en la base de datos
        alert('Servicio actualizado exitosamente');
    });
});
