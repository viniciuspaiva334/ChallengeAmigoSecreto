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
   if(nomes.length===0){
       alert("Por favor, adicione nomes a lista");
   }else {
       if (numerosSorteados.includes(pessoa)) {

           let pessoa = Math.floor(Math.random() * nomes.length);

       } else {
           let removeNomes = document.getElementById('ListaAmigos').innerHTML = '';
           let nomeSorteado = document.getElementById('SeusAmigos');
           nomeSorteado.innerHTML = "Seu amigo secreto é:" + nomes[pessoa];


           numerosSorteados.push(pessoa);
           document.getElementById("Botao").disabled = true;
       }
   }
    document.getElementById("novoJogo").disabled = false;

 }

  function novoJogo(){
location.reload();
      document.getElementById("Botao").disabled = false;
}
