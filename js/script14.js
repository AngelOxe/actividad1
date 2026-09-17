document.addEventListener('DOMContentLoaded', () => {
    const calcularBtn = document.getElementById('calcularBtn');
    const numerosInput = document.getElementById('numeros');
    const mayorInput = document.getElementById('mayor');
    const menorInput = document.getElementById('menor');
    const promedioInput = document.getElementById('promedio');
    const errorMessage = document.getElementById('error-message');

    calcularBtn.addEventListener('click', () => {
    
        errorMessage.textContent = '';
        mayorInput.value = '';
        menorInput.value = '';
        promedioInput.value = '';

        const valorIngresado = numerosInput.value.trim();

        // 2. Validación: Verificar que el campo de entrada no esté vacío
        if (valorIngresado === '') {
            errorMessage.textContent = 'Por favor, ingresa una serie de números.';
            return;
        }

        // 3. Dividir la cadena en un arreglo usando las comas
        const arregloCadenas = valorIngresado.split(',');
        const numeros = [];

        // 4. Recorrer el arreglo para validar y convertir a números
        for (let i = 0; i < arregloCadenas.length; i++) {
            // Se quitan los espacios alrededor de cada número
            const cadenaLimpia = arregloCadenas[i].trim();
            
            // Si después de quitar comas quedó un espacio vacío o una letra
            if (cadenaLimpia === '' || isNaN(Number(cadenaLimpia))) {
                errorMessage.textContent = 'Asegúrate de ingresar solo números válidos separados por comas.';
                return;
            }
            
            // Convertimos la cadena a número y la agregamos al nuevo arreglo
            numeros.push(Number(cadenaLimpia));
        }

        
        const mayor = Math.max(...numeros);
        const menor = Math.min(...numeros);

       
        const suma = numeros.reduce((acc, valor) => acc + valor, 0);
        const promedio = suma / numeros.length;

       
        mayorInput.value = mayor;
        menorInput.value = menor;
        promedioInput.value = promedio;
    });
});