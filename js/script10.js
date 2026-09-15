// Aseguramos que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {
    const convertBtn = document.getElementById('convertBtn');
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    const errorMessage = document.getElementById('error-message');

    convertBtn.addEventListener('click', () => {
        // Limpiar mensajes de error previos y el campo de resultado
        errorMessage.textContent = '';
        fahrenheitInput.value = '';

        const celsiusValue = celsiusInput.value;

        // Validación 1: El campo no debe estar vacío
        if (celsiusValue.trim() === '') {
            errorMessage.textContent = 'Por favor, ingresa un valor.';
            return;
        }

        // Convertir la entrada a un número flotante
        const celsius = parseFloat(celsiusValue);

        // Validación 2: Asegurar que el valor ingresado sea numérico
        if (isNaN(celsius)) {
            errorMessage.textContent = 'El valor ingresado no es un número válido.';
            return;
        }

        // Realizar el cálculo: F = (C * 9/5) + 32
        const fahrenheit = (celsius * 9 / 5) + 32;

        // Opcional: Redondear a un máximo de 2 decimales para evitar números muy largos,
        // pero eliminando ceros innecesarios (ej. 77 en vez de 77.00)
        const formatFahrenheit = Number(fahrenheit.toFixed(2));

        // Mostrar el resultado final en la caja readonly concatenando "°F"
        fahrenheitInput.value = `${formatFahrenheit}°F`;
    });
});