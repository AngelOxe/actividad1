document.addEventListener('DOMContentLoaded', () => {
    const verifyBtn = document.getElementById('verifyBtn');
    const edadInput = document.getElementById('edad');
    const resultadoInput = document.getElementById('resultado');
    const errorMessage = document.getElementById('error-message');

    verifyBtn.addEventListener('click', () => {
       
        errorMessage.textContent = '';
        resultadoInput.value = '';

        const edadValue = edadInput.value;

        // Validación 1: Verificar que el campo no esté vacío
        if (edadValue.trim() === '') {
            errorMessage.textContent = 'Por favor, ingresa tu edad.';
            return;
        }


        const edad = parseInt(edadValue, 10);

        // Validación 2: Verificar que sea un número válido y además sea positivo
        if (isNaN(edad) || edad < 0) {
            errorMessage.textContent = 'Por favor, ingresa un número positivo válido.';
            return;
        }

       
        if (edad >= 18) {
            
            resultadoInput.value = "Puedes votar";
        } else {
            
            resultadoInput.value = "No puedes votar";
        }
    });
});