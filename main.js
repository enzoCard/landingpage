

const form =document.getElementById("form");

const nameInput=document.getElementById("inputAddress");
const celularInput=document.getElementById ("inputcelular");
const emailInput=document.getElementById ("inputEmail4");
const escolaSelect =document.getElementById("inputState");
const estadoSelect=document.getElementById ("inputState3");
const cidadeSelect=document.getElementById ("inputState2");

form.addEventListener("submit",(event) => {
event.preventDefault();

//verificar nome vazio
if (nameInput.value ==="") {
    alert("Por Favor, preencha o seu nome");
    return;
}
//verificar o email
if (emailInput.value ==="" || !isEmailValid(emailInput.value)){
    alert("Por Favor, preencha o seu email");
    return;

}
//verificar estado
if(estadoSelect.value ==="") {
    alert ("Por Favor, selecione seu estado");
    return;
}
//verificar cidade
if(cidadeSelect.value ==="") {
    alert ("Por Favor, selecione sua cidade");
    return;
}
//verificar celular 
if (celularInput.value==="") {
    alert("Preencha o seu número de celular");
    return;
}

//verificar se selecionou 
if(escolaSelect.value ==="") {
    alert ("Por Favor, selecione sua escola");
    return;


}
//se todos campos tiverem corretamente preenchidos, envie o FORM
form.submit();
});

//funcao dos emails
function isEmailValid (email) {
    const emailRegex=new RegExp(
        //pessoa12@host.com.br (para validaremails)
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-z]{2,}/
    );
    
 if(emailRegex.test(email)) {
    return true;
 }
 return false;
}
