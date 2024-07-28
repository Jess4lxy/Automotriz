document.addEventListener('DOMContentLoaded', function() {
    const vehicleTitle = localStorage.getItem('vehicleTitle');
    const vehicleImg = localStorage.getItem('vehicleImg');
    const vehicleTipoauto = localStorage.getItem('vehicleTipoauto');
    const vehicleNumeroserie = localStorage.getItem('vehicleNumeroserie');
    const vehicleAnio = localStorage.getItem('vehicleAnio');
    const vehicleCilindros = localStorage.getItem('vehicleCilindros');
    const vehicleDisponibilidad = localStorage.getItem('vehicleDisponibilidad');
    const vehiclePrecio = localStorage.getItem('vehiclePrecio');
    const vehicleCantidadpuertas = localStorage.getItem('vehicleCantidadpuertas');
    const vehicleColor = localStorage.getItem('vehicleColor');
    const vehicleGarantia = localStorage.getItem('vehicleGarantia');
    const vehicleDescuentos = localStorage.getItem('vehicleDescuentos');
    const vehicleNumeroseguro = localStorage.getItem('vehicleNumeroseguro');

    document.getElementById('vehicle-title').textContent = vehicleTitle;
    document.getElementById('vehicle-img').src = vehicleImg;
    document.getElementById('vehicle-Tipoauto').textContent = `Tipo de auto: ${vehicleTipoauto}`;
    document.getElementById('vehicle-Numeroserie').textContent = `Número de serie: ${vehicleNumeroserie}`;
    document.getElementById('vehicle-Anio').textContent = `Año: ${vehicleAnio}`;
    document.getElementById('vehicle-Cilindros').textContent = `Cilindros: ${vehicleCilindros}`;
    document.getElementById('vehicle-Disponibilidad').textContent = `Disponibilidad: ${vehicleDisponibilidad}`;
    document.getElementById('vehicle-Precio').textContent = `Precio: $${vehiclePrecio}`;
    document.getElementById('vehicle-Cantidadpuertas').textContent = `Cantidad de puertas: ${vehicleCantidadpuertas}`;
    document.getElementById('vehicle-Color').textContent = `Color: ${vehicleColor}`;
    document.getElementById('vehicle-Garantia').textContent = `Garantía: ${vehicleGarantia}`;
    document.getElementById('vehicle-Descuentos').textContent = `Descuento: $${vehicleDescuentos}`;
    document.getElementById('vehicle-Numeroseguro').textContent = `Número de seguro: ${vehicleNumeroseguro}`;

    const saleForm = document.getElementById('sale-form');
    saleForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get the form values
        const Fechaventa = document.getElementById('Fechaventa').value;
        const Precio = document.getElementById('Precio').value;
        const Tipodepago = document.getElementById('Tipodepago').value;
        const Tipodeadquisicion = document.getElementById('Tipodeadquisicion').value;
        const Id_cliente = document.getElementById('Id_cliente').value;
        const Id_empleado = document.getElementById('Id_empleado').value;
        const Id_auto = document.getElementById('Id_auto').value;

        // Handle the sale logic here
        console.log('Venta confirmada con los siguientes detalles:');
        console.log('Fecha de Venta:', Fechaventa);
        console.log('Precio de Venta:', Precio);
        console.log('Tipo de Pago:', Tipodepago);
        console.log('Tipo de Adquisición:', Tipodeadquisicion);
        console.log('ID del Cliente:', Id_cliente);
        console.log('ID del Empleado:', Id_empleado);
        console.log('ID del Auto:', Id_auto);

        alert('Venta confirmada para ' + vehicleTitle);
    });
});
