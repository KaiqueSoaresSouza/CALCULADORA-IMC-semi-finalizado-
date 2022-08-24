
const calcular = document.getElementById('calcular');



function imc (){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;   
    const resultado = document.getElementById('resultado');
    
    
    if ( nome.value !== '' && altura !== '' && peso !== '') {
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';
        if (valorIMC < 18.5){
            classificacao = 'Abaixo do Peso.';
        } else if (valorIMC < 25){
           classificacao = 'Com seu peso Ideal. Parabéns!!!';
        }else if(valorIMC < 30 ){
            classificacao = 'Levemente acima do peso (VAI PRA ACADEMIA!!)';
        }else if (valorIMC < 35){
            classificacao = 'Com obesidade grau I ( PARA DE COMER LANCHE!!)';
        }else if (valorIMC < 40){
            classificacao = 'Com obesidade grau II (BARIATRÍCA E OLHE LÁ)';
        }else {
            classificacao = 'com obesidade grau III (COSPLAY DE FREEWILLY)!!';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;

     }else {
        resultado.textContent = 'Preencha Todos os Campos!!!'
     }

    



}
calcular.addEventListener('click', imc);