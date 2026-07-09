function enviar(){

const marca=document.getElementById("marca").value;
const numero=document.getElementById("numero").value;

db.collection("respostas").add({
marca:marca,
numero:numero,
data:new Date()
});

document.getElementById("msg").innerHTML="Enviado!";
}
