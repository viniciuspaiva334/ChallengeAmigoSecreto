var textField = document.getElementById('AdicionarNomes');
textField.addEventListener("click", getNomes);

var nomes = [];
var tamanhoLista = 0;
var numerosSorteados= [];

function getNomes(){
    let input = document.getElementById('textField').value;


   if( input ===  '' ){
       alert("Digite um nome valido");
       let input = document.getElementById('textField').value;


   }if( input === ' ' ){
        alert("Digite um nome valido");
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

    alert(nomes.length)
    let pessoa = Math.floor(Math.random()*nomes.length); //se( [amanda] === position Sorteada(0) ) = remove  [maria] [fabiana] (


    if (numerosSorteados.includes(pessoa)){

        let pessoa = Math.floor(Math.random()*nomes.length);
        const  element = document.querySelector('p');
        const removeNomes = document.getElementById('ListaAmigos').removeChild(element);


    }else {

        const nomeSorteado = document.getElementById('SeusAmigos');
        nomeSorteado.innerHTML = "Seu amigo secreto eh :" +nomes[pessoa];

        numerosSorteados.push(pessoa);



    }






}