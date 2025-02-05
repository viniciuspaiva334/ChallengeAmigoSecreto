var textField = document.getElementById('AdicionarNomes');
textField.addEventListener("click", getNomes);

var nomes = [];
var tamanhoLista = 0;
var numerosSorteados= [];
var pessoa = Math.floor(Math.random()*nomes.length); //se( [amanda] === position Sorteada(0) ) = remove  [maria] [fabiana] (
var  disappearButton = document.getElementById('Botao');

function getNomes(){
    let input = document.getElementById('textField').value;


   if( input ===  '' ){
       alert("Digite um nome valido!");
       let input = document.getElementById('textField').value;


   }if( input === ' ' ){
        alert("Digite um nome valido! ");
        let input = document.getElementById('textField').value;
    }else{

       const  para  = document.createElement("p");

       const node=  document.createTextNode(input);
       para.appendChild(node);

       document.getElementById('ListaAmigos').appendChild(para);
       document.getElementById('textField').value = ' ';
        nomes.push(input);
       //tamanhoLista = nomes.length;
   }





}



function Sortear(){
    let pessoa = Math.floor(Math.random()*nomes.length);

    if (numerosSorteados.includes(pessoa)){

        let pessoa = Math.floor(Math.random()*nomes.length);

    }else {
        let  removeNomes = document.getElementById('ListaAmigos').innerHTML = '';
        let nomeSorteado = document.getElementById('SeusAmigos');
        nomeSorteado.innerHTML = "Seu amigo secreto é:" +nomes[pessoa];


        numerosSorteados.push(pessoa);

    }
// se o botao d333e sortear for apertado ele desaparece logo em seguida e o botao de novo jogo appears
//     disappearButton.style.visibility = "hidden";

 }
 //
 // function novoJogo(){
 //    disappearButton.style.visibility='visible';
 //
 // }