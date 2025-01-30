var textField = document.getElementById('AdicionarNomes');
textField.addEventListener("click", getNomes);

var nomes = [];

function getNomes(){
    let input = document.getElementById('textField').value;


   if( input ===  '' ){
       alert("Digite um nome valido");
       let input = document.getElementById('textField').value;


   }if( input === ' ' ){
        alert("Digite um nome valido");
        let input = document.getElementById('textField').value;
    }else{
       nomes.push(input)
       const  para  = document.createElement("p");

       const node=  document.createTextNode(input);
       para.appendChild(node);

       document.getElementById('teste').appendChild(para);
       document.getElementById('textField').value = ' ';

   }





}



function Sortear(){


}