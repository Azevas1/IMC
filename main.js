function calcular(){
  let ps = document.getElementById('peso')
  let alt = document.getElementById('altura')
  let result = document.getElementById('IMC')

  let peso = (ps.value)
  let altura = (alt.value)
  let resultado = peso / (altura*altura)

  console.log(peso)
  console.log(altura)
  console.log(resultado.toFixed(2))

    
  if(peso == 0  || altura == 0 ){
    IMC.innerHTML = "Informação Inválida"
}else if(resultado < 18.5){
    IMC.innerHTML = `Seu Imc é: ${resultado.toFixed(2)},Abaixo do Peso`
} else if(resultado >= 18.5 && (resultado <= 24.9)){
    IMC.innerHTML = `Seu Imc é: ${resultado.toFixed(2)},Peso Normal`
}else if(resultado >= 25 && (resultado <= 29.9)){
    IMC.innerHTML = `Seu Imc é: ${resultado.toFixed(2)},Sobre Peso`
}else if(resultado >= 30 && (resultado <= 34.9)){
    IMC.innerHTML= `Seu Imc é: ${resultado.toFixed(2)},Obesidade Grau 1`
}else if(resultado >= 35 && (resultado <= 39.9)){
    IMC.innerHTML= `Seu Imc é: ${resultado.toFixed(2)},Obesidade Grau 2`
}else if(resultado >= 40){
    IMC.innerHTML = `Seu Imc é: ${resultado.toFixed(2)},Obesidade Grau 3`
}else{
    IMC.innerHTML = "Informação Inválida"

}

}


