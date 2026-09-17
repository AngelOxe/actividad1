document.addEventListener('DOMContentLoaded', () => {
    const convertBtn = document.getElementById('convertBtn');
    const kilometrosInput = document.getElementById('kilometros');
    const millasInput = document.getElementById('millas');
    const errorMessage = document.getElementById('error-message');

    convertBtn.addEventListener('click', () => {
        
        errorMessage.textContent = '';
        millasInput.value = '';

        const kilometrosValue = kilometrosInput.value;

        // Validación 1: Verificar que no esté vacío
        if (kilometrosValue.trim() === '') {
            errorMessage.textContent = 'Por favor, ingresa un valor.';
            return;
        }

        const kilometros = parseFloat(kilometrosValue);

        // Validación 2: Verificar que sea numérico
        if (isNaN(kilometros)) {
            errorMessage.textContent = 'El valor ingresado no es numérico.';
            return;
        }

        
        const millas = kilometros * 0.621371;

        
        millasInput.value = millas;
    });
});