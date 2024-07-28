document.addEventListener('DOMContentLoaded', function () {
    const clientsContainer = document.getElementById('clients-container');
    const modal = document.getElementById('client-modal');
    const detailsModal = document.getElementById('client-details-modal');
    const closeModal = document.querySelector('.close');
    const closeDetailsModal = detailsModal.querySelector('.close');
    const addClientBtn = document.getElementById('add-client-btn');
    const clientForm = document.getElementById('client-form');
    const searchBar = document.getElementById('search-bar');
    const editClientBtn = document.getElementById('edit-client-btn');

    const clients = [
        {
            id: 1,
            nombres: 'Juan',
            apellidos: 'Pérez',
            num_contacto: '555-1234',
            correo: 'juan.perez@example.com',
            direccion: 'Calle Falsa 123',
            identificacion: 'images/id1.png'
        },
        {
            id: 2,
            nombres: 'Ana',
            apellidos: 'García',
            num_contacto: '555-5678',
            correo: 'ana.garcia@example.com',
            direccion: 'Avenida Siempre Viva 456',
            identificacion: 'images/id2.png'
        }
    ];

    function renderClients(clientList) {
        clientsContainer.innerHTML = '';
        clientList.forEach(client => {
            const clientItem = document.createElement('div');
            clientItem.className = 'client-item';
            clientItem.dataset.id = client.id;
            clientItem.innerHTML = `
                <h3>${client.nombres} ${client.apellidos}</h3>
                <p>Correo: ${client.correo}</p>
            `;
            clientsContainer.appendChild(clientItem);
        });
    }

    function showClientDetails(client) {
        document.getElementById('client-id').textContent = client.id;
        document.getElementById('client-nombres').textContent = client.nombres;
        document.getElementById('client-apellidos').textContent = client.apellidos;
        document.getElementById('client-num_contacto').textContent = client.num_contacto;
        document.getElementById('client-correo').textContent = client.correo;
        document.getElementById('client-direccion').textContent = client.direccion;
        document.getElementById('client-identificacion').src = client.identificacion;
        detailsModal.style.display = 'flex';
    }

    renderClients(clients);

    addClientBtn.addEventListener('click', function () {
        modal.style.display = 'flex';
    });

    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    closeDetailsModal.addEventListener('click', function () {
        detailsModal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
        if (event.target === detailsModal) {
            detailsModal.style.display = 'none';
        }
    });

    clientForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(clientForm);
        const newClient = {
            id: Date.now(),
            nombres: formData.get('nombres'),
            apellidos: formData.get('apellidos'),
            num_contacto: formData.get('num_contacto'),
            correo: formData.get('correo'),
            direccion: formData.get('direccion'),
            identificacion: URL.createObjectURL(formData.get('identificacion'))
        };
        clients.push(newClient);
        renderClients(clients);
        modal.style.display = 'none';
    });

    searchBar.addEventListener('input', function (event) {
        const searchQuery = event.target.value.toLowerCase();
        const filteredClients = clients.filter(client =>
            client.nombres.toLowerCase().includes(searchQuery) ||
            client.apellidos.toLowerCase().includes(searchQuery)
        );
        renderClients(filteredClients);
    });

    clientsContainer.addEventListener('click', function (event) {
        if (event.target.closest('.client-item')) {
            const clientId = event.target.closest('.client-item').dataset.id;
            const clientToEdit = clients.find(client => client.id == clientId);
            if (clientToEdit) {
                showClientDetails(clientToEdit);
            }
        }
    });

    editClientBtn.addEventListener('click', function () {
        const clientId = document.getElementById('client-id').textContent;
        const clientToEdit = clients.find(client => client.id == clientId);
        if (clientToEdit) {
            clientForm['nombres'].value = clientToEdit.nombres;
            clientForm['apellidos'].value = clientToEdit.apellidos;
            clientForm['num_contacto'].value = clientToEdit.num_contacto;
            clientForm['correo'].value = clientToEdit.correo;
            clientForm['direccion'].value = clientToEdit.direccion;
            // Aquí no podemos prellenar la identificación ya que es un archivo
            detailsModal.style.display = 'none';
            modal.style.display = 'flex';
        }
    });
});
