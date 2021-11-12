document.querySelector("#plus").addEventListener('click', addition)
document.querySelector("#minus").addEventListener('click', subraction)
document.querySelector("#multiply").addEventListener('click', multiplication)
document.querySelector("#divide").addEventListener('click', division)

function addition(){ 
const water=  document.querySelector("#number1").valueAsNumber
const milk=  document.querySelector("#number2").valueAsNumber
  document.querySelector("#result").innerText = document.querySelector("#number1").valueAsNumber + document.querySelector("#number2").valueAsNumber
}

function subraction() {
  const water=  document.querySelector("#number1").valueAsNumber
  const milk=  document.querySelector("#number2").valueAsNumber
    document.querySelector("#result").innerText = document.querySelector("#number1").valueAsNumber - document.querySelector("#number2").valueAsNumber
}

function multiplication() {
  const water=  document.querySelector("#number1").valueAsNumber
const milk=  document.querySelector("#number2").valueAsNumber
  document.querySelector("#result").innerText = document.querySelector("#number1").valueAsNumber * document.querySelector("#number2").valueAsNumber
}

function division() {
  const water=  document.querySelector("#number1").valueAsNumber
  const milk=  document.querySelector("#number2").valueAsNumber
    document.querySelector("#result").innerText = document.querySelector("#number1").valueAsNumber / document.querySelector("#number2").valueAsNumber
}