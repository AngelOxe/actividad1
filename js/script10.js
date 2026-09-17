
document.addEventListener('DOMContentLoaded', () => {
    const convertBtn = document.getElementById('convertBtn');
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    const errorMessage = document.getElementById('error-message');

    convertBtn.addEventListener('click', () => {
    
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

        
        const fahrenheit = (celsius * 9 / 5) + 32;

        const formatFahrenheit = Number(fahrenheit.toFixed(2));

        fahrenheitInput.value = `${formatFahrenheit}°F`;
    });
});