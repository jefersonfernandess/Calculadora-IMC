
function calcImc() {
    let peso = document.getElementById('peso').value
    let altura = document.getElementById('altura').value
    console.log(peso, altura)
    const divResultado = document.querySelector(".imc-result");
    let resultado = peso / (altura * altura);
    divResultado.innerText = "Testando " + resultado ;
}