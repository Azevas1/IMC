function calcular(){
  let ps = document.getElementById('peso')
  let alt = document.getElementById('altura')
  let result = document.getElementById('IMC')

  let peso = (ps.value)
  let altura = (alt.value)
  let resultado = peso / (altura*altura)


  if(!peso || !altura ){
    IMC.innerHTML = "Informação Inválida"
}

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


/*let altura = 1.89
let peso = 150
let IMC = peso / (altura * altura)

if(peso / (altura * altura) < 18.5){
    console.log("Seu Imc é", IMC.toFixed(2),",","Abaixo Do Peso")
} else if(peso / (altura * altura) > 18.5 && (peso / (altura * altura) < 24.9)){
    console.log("Seu Imc é", IMC.toFixed(2),",","Peso Normal")
}else if(peso / (altura * altura) > 25 && (peso / (altura * altura) < 29.9)){
    console.log("Seu Imc é", IMC.toFixed(2),",","Sobre Peso")
}else if(peso / (altura * altura) > 30 && (peso / (altura * altura) < 34.9)){
    console.log("Seu Imc é", IMC.toFixed(2),",","Obesidade Grau 1")
}else if(peso / (altura * altura) > 35 && (peso / (altura * altura) < 39.9)){
    console.log("Seu Imc é", IMC.toFixed(2),",","Obesidade Grau 2")
}else if(peso / (altura * altura) > 40){
    console.log("Seu Imc é", IMC.toFixed(2),",","Obesidade Grau 3")
}else{
    console.log("Informação Inválida")
}
*/
