// ## Objetivo
// 
// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:
// 
// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante
// 
// ## Saída
// 
// Ao final deve se exibir uma mensagem:
// "O Herói de nome **{nome}** está no nível de **{nivel}**"

//switch//
let xpHeroi = prompt("Digite um número: ")
let nomeHeroi = prompt("Digite o nome do Herói: ")
let nivelHeroi

switch (true){
    case xpHeroi < 1000:
        nivelHeroi = "Ferro"
    break
    
    case xpHeroi <= 2000:
        nivelHeroi = "Bronze"
    break
    
    case xpHeroi <= 5000:
        nivelHeroi = "Prata"
    break
    
    case xpHeroi <= 7000:
        nivelHeroi = "Ouro"
    break
    case xpHeroi <= 8000:
        nivelHeroi = "Platina"
    break
    
    case xpHeroi <= 9000:
        nivelHeroi = "Ascendente"
    break
    
    case xpHeroi <= 10000:
        nivelHeroi = "Imortal"
    break
    
    case xpHeroi >= 10001:
        nivelHeroi = "Radiante"
    break
    
    default:{
        nivelHeroi = "(ERRO)"
    }
}

console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`)


//if else if
let xpHeroi = prompt("Digite um valor númerico: ")
let nomeHeroi = prompt("Digite o nome do Herói: ")
let nivelHeroi

if (xpHeroi < 1000){
    nivelHeroi = "Ferro"
}
else if (xpHeroi <=2000){
    nivelHeroi = "Bronze"
}
else if (xpHeroi <=5000){
    nivelHeroi = "Prata"
}
else if (xpHeroi <=7000){
    nivelHeroi = "Ouro"
}
else if (xpHeroi <=8000){
    nivelHeroi = "Platina"
}
else if (xpHeroi <=9000){
    nivelHeroi = "Ascendente"
}
else if (xpHeroi <=10000){
    nivelHeroi = "Imortal"
}
else{
    nivelHeroi = "Radiante"
}