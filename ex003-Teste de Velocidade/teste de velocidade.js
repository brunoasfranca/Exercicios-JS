//Escreva um programa em javascript que permita inserir o nome e a velocidade de dois veículos e exiba na tela 
//uma mensagem dizendo qual dos dois é mais rápido (ou que as velocidades são iguais se este for o caso)

const veiculo1 = prompt("Informe o nome do 1° veiculo: ")
const velocidade1 = parseFloat(prompt("Qual é a velociade? "))
const veiculo2 = prompt("Informe o nome do 2° veiculo: ")
const velocidade2 = parseFloat(prompt("Qual é a velociade? "))



if (velocidade1 > velocidade2) {
    alert(
        "Teste de velocidade\n" +
        "\nNome do 1° veiculo: " + veiculo1 + " com " + velocidade1 + "km/h" +
        "\nNome do 2° veiculo: " + veiculo2 + " com " + velocidade2 + "km/h" +
        "\nO veículo " + veiculo1 + " é o mais rápido"         
    )
} else if (velocidade2 > velocidade1) {
    alert(
        "Teste de velocidade\n" +
        "\nNome do 1° veiculo: " + veiculo1 + " com " + velocidade1 + "km/h" +
        "\nNome do 2° veiculo: " + veiculo2 + " com " + velocidade2 + "km/h" +
        "\nO veículo " + veiculo2 + " é o mais rápido" 
    )
}else {
    alert (
        veiculo1 + " e " + veiculo2 + " posuem velocidades iguais"
    )
}







