saldo = 1000

function dadosacesso(){
    numcartao = prompt("Digite o numero do cartão: ")
    senha = prompt("Digite sua senha: ")
}

function saque(valor){
    saldo = saldo - valor
    return saldo
}