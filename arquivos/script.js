
    let inputInicio = document.querySelector('#inicio');
    let inputFim = document.querySelector('#fim');
    let inputPasso = document.querySelector('#passo');
    let resultado = document.querySelector('#resultado');
    let status = document.querySelector('#status');
    
//======= Funcão para iniciar a contagem [Botão contar] =========================
function contar(){
    resultado.innerHTML='';
    
//======= valida os campos [Inicio] e [Fim] que devem ser != de zero ============
//======= caso [Inicio < Fim] o [Passo] deve ser positivo ============
    if( ( inputInicio.value.length === 0 )||( inputFim.value.length === 0 )
        || (inputInicio.value < inputFim.value)&&(inputPasso.value < 0) ) {
        
        alert(`Campos invalidos!`);

    }else{
    //===== Inicializando as variaveis com os valores de cada campo ==============
        var inicio = Number(inputInicio.value);
        var fim = Number(inputFim.value);
        var passo = Number(inputPasso.value);
        status.innerHTML = `Contando...`;

    //==== contagem crescente ================================================
        if(inicio < fim ){

        //==== caso o [passo] nao seja definido ele sera +1(aumenta de um em um) ====
            if(passo==""){passo = 1;} 
            for(var i = inicio; i <= fim; i +=passo ){
                resultado.innerHTML += `${i} &#128073;&#127997;  `;
            }
    //===== contagem decrescente =============================================
        }else if(inicio > fim){
        //==== caso o [passo] nao seja definido ele sera -1(diminui de um em um) =====
            if(passo==""){
                passo = 1;
            }else if( passo <= 0 ){
                passo *= (-1) ; 
            } 
            for(var i = inicio; i >= fim; i-=(passo) ){
                resultado.innerHTML += `${i} &#128073;&#127997;   `;
            }
        }
        resultado.innerHTML +=`&#127988;`;
    }
}

//==== Limpa os campos botao [Limpar]=====
function limpar(){
    inputInicio.value = '';
    inputFim.value = '';
    inputPasso.value = '';
    resultado.innerHTML = '';
    status.innerHTML = `Preparando contagem...`;
}

