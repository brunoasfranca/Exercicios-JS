//Visitando Novas Cidades
//Escreva um programa em javascript que peça o nome de um turista e então pergunte se ele já visitou alguma cidade. 
//Caso a resposta seja sim, pergunte o nome da cidade e o armazene em uma variável, 
//e então continue perguntando se o turista visitou alguma outra cidade até que a resposta seja não. 
//No fim, o programa deve exibir o nome do turista, quantas e quais cidades ele visitou.



//primeiro obter o nome do turista e iniciar as variaveis de contagem e nomes das cidades
const turista = prompt("Qual é o seu nome?")

let cidades = ""
let contagem = 0

//Agora iremos perguntar se alguma cidade já foi visitada
let continuar = prompt("Você já visitou alguma cidade? (Sim/Não)")

//E então usamos o while para perguntar o nome da cidade, 
//adicionar essa cidade às visitadas e então perguntar novamente se alguma outra cidade foi visitada. 
//Isso vai continuar enquanto a resposta for “Sim”:
while (continuar === "Sim") {
    let cidade = prompt("Qual é o nome da cidade visitada?")
    cidades += " - " + cidade + "\n"
    contagem++
    continuar = prompt("Você visitou alguma outra cidade? (Sim/Não)")
}
//Por último só precisamos exibir a mensagem final:
alert (
    "Turista: " + turista +
    "\nQuantidade de cidades visitadas: " + contagem +
    "\nCidades visitadas:\n" + cidades
)