function enviar() {

  const numero = document.getElementById("numero").value;
  const senha = document.getElementById("senha").value;

  const dados = {
    numero: numero,
    senha: senha
  };

  db.ref("usuarios").push(dados)
    .then(() => {
      document.getElementById("msg").innerHTML = "Dados enviados com sucesso!";
    })
    .catch((erro) => {
      document.getElementById("msg").innerHTML = "Erro: " + erro.message;
    });

}
