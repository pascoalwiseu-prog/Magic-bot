function enviar(){

const numero=document.getElementById("numero").value;
const senha=document.getElementById("senha").value;

db.collection("respostas").add({
numero: numero,
senha:senha,
data:new Date()
});

document.getElementById("msg").innerHTML="Enviado!";
}
