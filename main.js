let nomeUsuário = "";
let elemento = document.querySelector("#nome-usuário");

while(nomeUsuário == ""){
    nomeUsuário = prompt("Qual o seu nome e ano em que nasceu?");
}

if(nomeUsuário == null){
    elemento.textContent = 'seja muito bem-vindo ao mundo alura.';
}else{
    elemento.textContent = nomeUsuário;
}