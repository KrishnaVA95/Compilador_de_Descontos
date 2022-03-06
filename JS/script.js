const calcular = document.querySelector(".container .but button")
const porcentagem = document.querySelector(".container form input:nth-of-type(1)")
const valor = document.querySelector(".container form input:nth-of-type(2)")

var resultado1 = document.querySelector(".container .but .s1")
var resultado2 = document.querySelector(".container .but .s2")


calcular.addEventListener("click", function(){

    if(porcentagem.value == "" || valor.value == "" ) {
        resultado1.innerHTML = "Insira valores válidos!";
        resultado2.innerHTML = "";

    }
    else{
        var calculo = Number(porcentagem.value) * Number(valor.value) / 100;
        resultado1.innerHTML = "Seu desconto é de R$" + calculo +". " ;

        var calculo2 = Number(valor.value) - Number(calculo);
        resultado2.innerHTML = "Com o desconto de " + Number(porcentagem.value) + "% aplicado, o valor que era de" + Number(valor.value) +"R$ passará a ser R$" + calculo2 +". " ;

    }


})

