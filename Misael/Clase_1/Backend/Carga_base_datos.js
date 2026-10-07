// Función para cargar los datos desde el archivo JS
function cargarClientes() {
    const tbody = document.getElementById('tabla-clientes');
    
    try {
        if (typeof clientesData === 'undefined') {
            throw new Error('La variable clientesData no está definida. Revisa Clientes.js');
        }

        tbody.innerHTML = '';

        clientesData.forEach(cliente => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${cliente.Nombre || 'Sin nombre'}</td>
                <td>${cliente["Numero Cliente"] || 'N/A'}</td>
                <td>${cliente.Rut || 'Sin RUT'}</td>
                <td>${cliente.Celular || 'Sin celular'}</td>
                <td>
                    <button class="btn-detalles" type="button" onclick="irADetalles(${cliente["Numero Cliente"]})">Detalles</button>
                    <button class="btn-eliminar" type="button">Eliminar</button>
                </td>
            `;
            tbody.appendChild(fila);
        });

    } catch (error) {
        console.error('Error al cargar los datos:', error);
        tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; color:red;">Error al cargar los datos.</td></tr>`;
    }
}

// Nueva función para redirigir a la página de detalles
function irADetalles(idCliente) {
    window.location.href = `Detalles.html?id=${idCliente}`;
}

// Ejecutar la función cuando la página termine de cargar
document.addEventListener('DOMContentLoaded', cargarClientes);