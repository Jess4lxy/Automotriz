document.addEventListener('DOMContentLoaded', function() {
    const salesContainer = document.getElementById('sales-container');

    // Aquí simulo algunas ventas para mostrar en la página
    const sales = [
        {
            imgSrc: './images/miata.jpg',
            title: 'Mazda Miata MX-5',
            description: 'Venta realizada a Juan Pérez',
            price: '450,000 MXN'
        },
        {
            imgSrc: './images/NP300.jpg',
            title: 'Nissan NP300',
            description: 'Venta realizada a María López',
            price: '320,000 MXN'
        },
        {
            imgSrc: './images/versa.jpg',
            title: 'Nissan Versa',
            description: 'Venta realizada a Carlos García',
            price: '250,000 MXN'
        },
        {
            imgSrc: './images/aveo.jpg',
            title: 'Chevrolet Aveo',
            description: 'Venta realizada a Ana Fernández',
            price: '280,000 MXN'
        },
        {
            imgSrc: './images/sentra.jpg',
            title: 'Nissan Sentra',
            description: 'Venta realizada a Luis Martínez',
            price: '300,000 MXN'
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
        `;

        salesContainer.appendChild(saleItem);
    });
});
