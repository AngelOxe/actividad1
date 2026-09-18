const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero';

const calcularOperacion = (operacion) => {
    const input1 = document.getElementById('numero1').value.trim();
    const input2 = document.getElementById('numero2').value.trim();
    const resultadoInput = document.getElementById('resultado');

    resultadoInput.value = '';

    if (input1 === '' || input2 === '') {
        Swal.fire({
            icon: 'error',
            title: 'Campos vacíos',
            text: 'Por favor, ingresa ambos números para realizar la operación.'
        });
        return;
    }

    const a = parseFloat(input1);
    const b = parseFloat(input2);

    if (isNaN(a) || isNaN(b)) {
        Swal.fire({
            icon: 'error',
            title: 'Valor inválido',
            text: 'Asegúrate de ingresar solo valores numéricos.'
        });
        return;
    }

    let resultado;

    switch (operacion) {
        case 'suma':
            resultado = sumar(a, b);
            break;
        case 'resta':
            resultado = restar(a, b);
            break;
        case 'multiplicacion':
            resultado = multiplicar(a, b);
            break;
        case 'division':
            resultado = dividir(a, b);
            if (resultado === 'Error: División por cero') {
                Swal.fire({
                    icon: 'warning',
                    title: 'Operación no permitida',
                    text: resultado
                });
                return;
            }
            break;
        default:
            return;
    }

    resultadoInput.value = resultado;
};