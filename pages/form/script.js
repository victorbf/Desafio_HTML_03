const Enviar = (e) => {
  document.getElementById("form").addEventListener("click", function (event) {
    event.preventDefault()
  });

  const user = document.getElementById("user");
  const email = document.getElementById("email");
  const password = document.getElementById("password")
  const confirm_password = document.getElementById("confirm_password")
  const complete_name = document.getElementById("complete_name")
  const age = document.getElementById("age")
  const phone = document.getElementById("phone")

  if (password.value !== confirm_password.value) {
    console.log('Senha não é a mesma');
    return;
  }

  console.log(`Usuário: ${user.value}`);
  console.log(`Email: ${email.value}`);
  console.log(`Senha: ${password.value}`);
  console.log(`Confirmação de senha: ${confirm_password.value}`);
  console.log(`Nome Completo: ${complete_name.value}`);
  console.log(`Idade: ${age.value}`);
  console.log(`Telefone: ${phone.value}`);
}