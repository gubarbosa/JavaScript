var nome = prompt('Qual o seu nome?') //Declaração de variável 
var n1 = Number(prompt('Digite um número: '))  //Number interpreta a variável em inteiro ou float
var n2 = Number(prompt('Digite outro número: '))
var soma = n1 + n2  //Soma das variáveis 
alert(`A soma entre ${n1} e ${n2} é ${soma}`)  //Template string
window.alert(`É um prazer te conhecer ${nome}`) //Concatenação
var s = "Linha de texto"
s.length // Conta tamanho da string
s.toUpperCase() //Coloca em maiúsculo
s.toLowerCase() //Coloca em minúsculo
alert(`Variável s: ${s.toUpperCase()}`)
