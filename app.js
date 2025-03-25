document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário para a URL

    const username = document.getElementById("newUsername").value;
    const password = document.getElementById("newPassword").value;

    if (username && password) {
        // Salva o login no localStorage
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);

        document.getElementById("message").style.color = "green";
        document.getElementById("message").textContent = "Login cadastrado com sucesso!";
    } else {
        document.getElementById("message").style.color = "red";
        document.getElementById("message").textContent = "Por favor, preencha todos os campos.";
    }
});