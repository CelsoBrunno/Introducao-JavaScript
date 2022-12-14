function comparaNumeros(num1, num2){
    if(!num1 || !num2)return 'Defina dois números';

    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase =  criaSegundaFrase(num1, num2);

    return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(num1, num2) {
    let saoIguais = '';

    if(num1 !== num2){
       saoIguais = 'não';
    }
    return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`;
}

function criaSegundaFrase(num1, num2){
    const soma = num1 + num2;   
    
    let resultadoQ10 = 'menor';
    let resultadoQ20 = 'menor';
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if(compara10){
        resultadoQ10 = 'maior';
    }

    if(compara20){
        resultadoQ20= 'maior';
    }

    return `Sua Soma é ${soma}, que é ${resultadoQ10} que 10 e ${resultadoQ20} que 20`;
}

console.log (comparaNumeros(1, 1));