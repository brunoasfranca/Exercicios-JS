const entrada1 = prompt ("Informe o primeiro número: ")
const entrada2 = prompt ("Informe o segundo número: ")

const x = parseFloat(entrada1)
const y = parseFloat(entrada2)

const soma = x + y
const subitracao = x - y
const multiplicacao = x * y
const divisao = x / y

alert (
    "Resultado:\n" +
    "\nSoma: " + soma +
    "\nSubtracão: " + subitracao +
    "\nMultiplicação: " + multiplicacao +
    "\nDivisão: " + divisao
)