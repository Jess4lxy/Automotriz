document.addEventListener('DOMContentLoaded', function() {
    const vehicleTitle = localStorage.getItem('vehicleTitle');
    const vehicleImg = localStorage.getItem('vehicleImg');
    const vehicleDescription = localStorage.getItem('vehicleDescription');

    document.getElementById('vehicle-title').textContent = vehicleTitle;
    document.getElementById('vehicle-img').src = vehicleImg;
    document.getElementById('vehicle-description').textContent = vehicleDescription;

    const saleForm = document.getElementById('sale-form');
    saleForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Aquí puedes agregar la lógica para manejar la venta del vehículo
        alert('Venta confirmada para ' + vehicleTitle);
    });
});
