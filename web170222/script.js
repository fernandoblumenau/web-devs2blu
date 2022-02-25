console.log('javasript inicaindo!');

/*var texto = 'texto JS';
console.log(texto);
texto =200
console.log(texto);
texto = {
    id : 1,
    textoHTML: 'Meu texto objetivo',    
};
console.log(texto);
texto.atualizado = true;
console.log(texto);
texto.exibetexto = function(){
    console.log(this.id + ' - '+this.textoHTML);
}
texto.exibetexto();*/

var qdVermelho = document.getElementById('quadrado1');
var qdCinza = document.getElementsByClassName('quadrado');

posicionaQuadrados(qdCinza);

qdVermelho.style.width ='100px';
qdVermelho.style.height= '100px';

function posicionaQuadrados(collection){
console.log(collection);
for (let index = 0; index < collection.length; index++) {
    const element = collection[index];
    console.log(element); 
    element.style.top = retornaPosicao ('Y');
    element.style.left = retornaPosicao ('X');      
}

function retornaPosicao(varxy){
    var altura = 500, largura =500;
    var medidaRetorno;
    if(varxy==='X'){
        medidaRetorno= Math.random()*(largura-0)+0;
    }else{
       medidaRetorno = Math.random()*(altura-0)+0;
    }
    return `${medidaRetorno}px`;
}
}