$(function(){

    $('button').on('click',function(){
       var altura = $('#altura').val();
       var peso = $('#peso').val();

       peso = peso.replace(',','.')
       altura = altura.replace(',','.');//função que substitui um caracter por outro afim de adaptar o que o usuário está escrevendo para algo que o sistema compreenda;

       //IMC = peso (em quilos) ÷ altura² (em metros)
       var imc = (peso  / (Math.pow(altura, 2))).toFixed(2);//Math.pow(x, y)função de potência, 1º parametro base, 2º parametro expoente; a função .toFixed(2) é para arredondar o valor até a segunda casa decimal;

       
       if(imc<16){
           var traducao = 'Baixo peso muito grave';
        }else if(imc >= 16 && imc <= 16.99){
            var traducao = 'Baixo peso grave';
        }else if(imc >= 17 && imc <= 18.49){
            var traducao = 'Baixo peso';
        }else if(imc >= 18.5 && imc <= 24.99){
            var traducao = 'Peso nomral';
        }else if(imc >= 25 && imc <= 29.99){
            var traducao = 'Sobrepeso';
        }else if(imc >= 30 && imc <= 34.99){
            var traducao = 'Obesidade grau I';
        }else if(imc >= 35 && imc <= 39.99){
            var traducao = 'Obesidade grau II';
        }else if(imc >= 40){
            var traducao = 'Obesidade grau III';
        }
        
        $('#resultado').html("Seu IMC é: "+imc+"kg/² - "+traducao);
        
    })

})

/* Baixo peso muito grave = abaixo de 16 kg/m².
Baixo peso grave = entre 16 e 16,99 kg/m².
Baixo peso = entre 17 e 18,49 kg/m².
Peso normal = entre 18,50 e 24,99 kg/m².
Sobrepeso = entre 25 e 29,99 kg/m².
Obesidade grau I = entre 30 e 34,99 kg/m².
Obesidade grau II = entre 35 e 39,99 kg/m².
Obesidade grau III (obesidade mórbida) = maior que 40 kg/m².
fonte: https://www.mdsaude.com/obesidade/calcule-o-seu-peso-ideal-e-imc/ */