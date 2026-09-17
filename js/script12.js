document.addEventListener('DOMContentLoaded', () => {
    const convertBtn = document.getElementById('convertBtn');
    const mxnInput = document.getElementById('mxn');
    const usdInput = document.getElementById('usd');
    const errorMessage = document.getElementById('error-message');

    // Tasa de cambio definida en el problema
    const tasaDeCambio = 0.055;

    convertBtn.addEventListener('click', () => {
        
        errorMessage.textContent = '';
        usdInput.value = '';

        const mxnValue = mxnInput.value;

        // Validación 1: Asegurar que el campo no esté vacío
        if (mxnValue.trim() === '') {
            errorMessage.textContent = 'Por favor, ingresa una cantidad.';
            return;
        }

        const pesos = parseFloat(mxnValue);

        // Validación 2: Verificar que el valor sea numérico y positivo
        if (isNaN(pesos) || pesos < 0) {
            errorMessage.textContent = 'Por favor, ingresa un valor numérico positivo.';
            return;
        }


        const dolares = pesos * tasaDeCambio;

        usdInput.value = dolares.toFixed(2);
    });
});