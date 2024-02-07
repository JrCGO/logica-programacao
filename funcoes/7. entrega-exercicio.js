//*****if else if*****//
//function calcularNivel (vitorias, derrotas){
//    var saldoVitorias = vitorias - derrotas
//    var nivel
//    
//    if (vitorias <=10){
//        nivel = "Ferro"
//    }
//    else if (vitorias >10 && vitorias <=20){
//        nivel = "Bronze"
//    }
//    else if (vitorias >20 && vitorias <=50){
//        nivel = "Prata"
//    }
//    else if (vitorias >50 && vitorias <=80){
//        nivel = "Ouro"
//    }
//    else if (vitorias >80 && vitorias <=90){
//        nivel = "Diamente"
//    }
//    else if (vitorias >90 && vitorias <=100){
//        nivel = "Lendário"
//    }
//    else if (vitorias >100){
//        nivel = "Imortal"
//    }
//    else{
//        nivel = "Invalido"
//    }
//    
//    console.log(`O herói tem de saldo ${saldoVitorias} está no nível ${nivel}`)
//}
//
//calcularNivel (10, 0)

//*****switch*****//
calcularNivel (15, 5)

function calcularNivel (vitorias, derrotas){
    var saldoVitorias = vitorias - derrotas
    var nivel
    
    switch (true){
        
        case (vitorias <10):
            nivel = "Ferro"
            
            break
        case (vitorias <=20):
            nivel = "Bronze"
            
            break
        case (vitorias <=50):
            nivel = "Prata"
            
            break
        case (vitorias <=80):
            nivel = "Ouro"
            
            break
        case (vitorias <=90):
            nivel = "Diamente"
            
            break
        case (vitorias <=100):
            nivel = "Imortal"
            
            break
            
        default:
            nivel = "Invalido"
    }
    
    console.log(`O herói tem saldo de ${saldoVitorias} está no nível de ${nivel}`)
}

calcularNivel (9, 5)