document.addEventListener('DOMContentLoaded', function() {
    const salesContainer = document.getElementById('sales-container');

    // Datos de ventas simulados (deberían ser reemplazados con una llamada a la API)
    const sales = [
        {
            imgSrc: './images/miata.jpg',
            title: 'Mazda Miata MX-5',
            description: 'Venta realizada a Juan Pérez',
            price: '450,000 MXN',
            Fechaventa: '2024-07-27',
            Tipodepago: 'Crédito',
            Tipodeadquisicion: 'Nuevo',
            Estado: 'Activo',
            Cliente: { nombre: 'Juan', apellido: 'Pérez' },
            Empleado: { nombre: 'Carlos', apellido: 'Hernández' }
        },
        {
            imgSrc: './images/NP300.jpg',
            title: 'Nissan NP300',
            description: 'Venta realizada a María López',
            price: '320,000 MXN',
            Fechaventa: '2024-07-26',
            Tipodepago: 'Efectivo',
            Tipodeadquisicion: 'Usado',
            Estado: 'Activo',
            Cliente: { nombre: 'María', apellido: 'López' },
            Empleado: { nombre: 'Carlos', apellido: 'Hernández' }
        },
        {
            imgSrc: './images/versa.jpg',
            title: 'Nissan Versa',
            description: 'Venta realizada a Carlos García',
            price: '250,000 MXN',
            Fechaventa: '2024-07-25',
            Tipodepago: 'Crédito',
            Tipodeadquisicion: 'Nuevo',
            Estado: 'Activo',
            Cliente: { nombre: 'Carlos', apellido: 'García' },
            Empleado: { nombre: 'Carlos', apellido: 'Hernández' }
        },
        {
            imgSrc: './images/aveo.jpg',
            title: 'Chevrolet Aveo',
            description: 'Venta realizada a Ana Fernández',
            price: '280,000 MXN',
            Fechaventa: '2024-07-24',
            Tipodepago: 'Efectivo',
            Tipodeadquisicion: 'Usado',
            Estado: 'Activo',
            Cliente: { nombre: 'Ana', apellido: 'Fernández' },
            Empleado: { nombre: 'Carlos', apellido: 'Hernández' }
        },
        {
            imgSrc: './images/sentra.jpg',
            title: 'Nissan Sentra',
            description: 'Venta realizada a Luis Martínez',
            price: '300,000 MXN',
            Fechaventa: '2024-07-23',
            Tipodepago: 'Crédito',
            Tipodeadquisicion: 'Nuevo',
            Estado: 'Activo',
            Cliente: { nombre: 'Luis', apellido: 'Martínez' },
            Empleado: { nombre: 'Carlos', apellido: 'Hernández' }
        }
    ];

    sales.forEach(sale => {
        const saleItem = document.createElement('div');
        saleItem.className = 'sale-item';

        saleItem.innerHTML = `
            <img src="${sale.imgSrc}" alt="${sale.title}">
            <h3>${sale.title}</h3>
            <p class="sale-description">${sale.description}</p>
            <p class="sale-price">${sale.price}</p>
            <p>Fecha de venta: ${sale.Fechaventa}</p>
            <p>Tipo de pago: ${sale.Tipodepago}</p>
            <p>Tipo de adquisición: ${sale.Tipodeadquisicion}</p>
            <p>Estado: ${sale.Estado}</p>
            <p>Cliente: ${sale.Cliente.nombre} ${sale.Cliente.apellido}</p>
            <p>Empleado: ${sale.Empleado.nombre} ${sale.Empleado.apellido}</p>
        `;

        salesContainer.appendChild(saleItem);
    });
});
