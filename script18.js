const entradaNuevoElemento = document.getElementById('nuevoElemento');
const botonAgregar = document.getElementById('agregarBtn');
const listaElementos = document.getElementById('lista');

const agregarElemento = () => {
    const textoIngresado = entradaNuevoElemento.value.trim();

    if (textoIngresado !== '') {
        const elementoLista = document.createElement('li');
        elementoLista.className = 'list-group-item d-flex justify-content-between align-items-center';
        
        const nodoTexto = document.createTextNode(textoIngresado);
        elementoLista.appendChild(nodoTexto);

        const botonEliminar = document.createElement('button');
        botonEliminar.className = 'btn btn-danger btn-sm';
        botonEliminar.textContent = 'Eliminar';
        
        botonEliminar.addEventListener('click', () => {
            elementoLista.remove();
        });

        elementoLista.appendChild(botonEliminar);
        listaElementos.appendChild(elementoLista);

        entradaNuevoElemento.value = '';
        entradaNuevoElemento.focus();
    } else {
        alert('Escribe algo para agregar a la lista.');
    }
};

botonAgregar.addEventListener('click', agregarElemento);w