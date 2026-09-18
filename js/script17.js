const obtenerTareas = () => {
    const tareas = localStorage.getItem('tareas');
    return tareas ? JSON.parse(tareas) : [];
};

const manejarTareas = () => {
    const agregarTarea = (texto) => {
        const tareas = obtenerTareas();
        tareas.push({ tarea: texto, completada: false });
        localStorage.setItem('tareas', JSON.stringify(tareas));
        renderizarTareas();
    };

    const eliminarTarea = (index) => {
        Swal.fire({
            title: '¿Eliminar tarea?',
            text: "Esta acción no se puede deshacer.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ff4d4d',
            cancelButtonColor: '#333',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                const tareas = obtenerTareas();
                tareas.splice(index, 1);
                localStorage.setItem('tareas', JSON.stringify(tareas));
                renderizarTareas();
                Swal.fire('Eliminada', 'La tarea ha sido eliminada.', 'success');
            }
        });
    };

    return { agregarTarea, eliminarTarea };
};

const gestorTareas = manejarTareas();

const renderizarTareas = () => {
    const lista = document.getElementById('listaTareas');
    lista.innerHTML = '';
    const tareas = obtenerTareas();

    tareas.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item.tarea;

        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.onclick = () => gestorTareas.eliminarTarea(index);

        li.appendChild(btnEliminar);
        lista.appendChild(li);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    renderizarTareas();
    
    const agregarBtn = document.getElementById('agregarBtn');
    const tareaInput = document.getElementById('tareaInput');

    agregarBtn.addEventListener('click', () => {
        const texto = tareaInput.value.trim();
        if (texto !== '') {
            gestorTareas.agregarTarea(texto);
            tareaInput.value = '';
            tareaInput.focus();
        }
    });
});