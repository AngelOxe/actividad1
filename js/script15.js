document.addEventListener('DOMContentLoaded', () => {
    const nombreInput = document.getElementById('nombre');
    const calificacionInput = document.getElementById('calificacion');
    const agregarBtn = document.getElementById('agregarBtn');
    const calcularBtn = document.getElementById('calcularBtn');
    const promedioInput = document.getElementById('promedio');
    const maximoInput = document.getElementById('maximo');
    const minimoInput = document.getElementById('minimo');
    const errorMessage = document.getElementById('error-message');

    let estudiantes = [];

    agregarBtn.addEventListener('click', () => {
        errorMessage.textContent = '';
        const nombre = nombreInput.value.trim();
        const calificacion = parseFloat(calificacionInput.value);

        if (nombre === '' || isNaN(calificacion)) {
            errorMessage.textContent = 'Ingresa un nombre y una calificación válida.';
            return;
        }

        estudiantes.push({ nombre: nombre, calificacion: calificacion });
        
        nombreInput.value = '';
        calificacionInput.value = '';
        nombreInput.focus();
    });

    calcularBtn.addEventListener('click', () => {
        errorMessage.textContent = '';
        
        if (estudiantes.length === 0) {
            errorMessage.textContent = 'Agrega al menos un estudiante primero.';
            return;
        }

        const suma = estudiantes.reduce((total, estudiante) => total + estudiante.calificacion, 0);
        const promedio = suma / estudiantes.length;

        const maxCalif = Math.max(...estudiantes.map(e => e.calificacion));
        const minCalif = Math.min(...estudiantes.map(e => e.calificacion));

        const estMax = estudiantes.find(e => e.calificacion === maxCalif).nombre;
        const estMin = estudiantes.find(e => e.calificacion === minCalif).nombre;

        promedioInput.value = promedio.toFixed(2);
        maximoInput.value = estMax;
        minimoInput.value = estMin;
    });
});