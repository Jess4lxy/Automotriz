document.getElementById('agregar-servicio-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const tipoDeServicio = document.getElementById('tipodeservicio').value;
    const fechaDeIngreso = document.getElementById('fechadeingreso').value;
    const fechaDeSalida = document.getElementById('fechadesalida').value;
    const costo = document.getElementById('costo').value;
    const auto = document.getElementById('auto').value;
    const estado = document.getElementById('estado').value;

    const newService = {
        tipodeservicio: tipoDeServicio,
        fechadeingreso: fechaDeIngreso,
        fechadesalida: fechaDeSalida,
        costo: costo,
        auto: auto,
        estado: estado,
        empleado: 'Juan Pérez'
    };

    // Aquí puedes agregar la lógica para enviar este nuevo servicio a tu backend

    console.log('Nuevo servicio agregado:', newService);

    // Redirigir a la página de servicios
    window.location.href = 'serviciosAsesor.html';
});
