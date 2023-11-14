var numeroSecreto = parseInt(Math.random() * 1001)
var quantidade = 0

while (chute != numeroSecreto) {
  var chute = prompt('Digite um número entre 0 e 1000')
  quantidade++
  
  // se o chute for igual ao número secreto
  if (chute == numeroSecreto) {
    alert('Acertou!')  
  } else if (chute > numeroSecreto) {
    alert(`Errou... o número secreto é menor do que ${chute}! Você já deu ${quantidade} chutes.`)
  } else if (chute < numeroSecreto) {
    alert(`Errou... o número secreto é maior do que ${chute}! Você já deu ${quantidade} chutes.`)
  }
} 