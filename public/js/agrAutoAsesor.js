document.getElementById('add-car-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const carData = {
        Marca_Modelo: formData.get('Marca_Modelo'),
        Tipoauto: formData.get('Tipoauto'),
        Numeroserie: formData.get('Numeroserie'),
        Anio: formData.get('Anio'),
        Cilindros: formData.get('Cilindros'),
        Disponibilidad: formData.get('Disponibilidad'),
        Precio: formData.get('Precio'),
        Cantidadpuertas: formData.get('Cantidadpuertas'),
        Color: formData.get('Color'),
        Garantia: formData.get('Garantia'),
        Descuentos: formData.get('Descuentos'),
        Numeroseguro: formData.get('Numeroseguro'),
        carImage: formData.get('carImage').name
    };

    console.log('Car data to be submitted:', carData);
    alert('Datos del auto enviados. (Datos simulados)');
    this.reset();
});
