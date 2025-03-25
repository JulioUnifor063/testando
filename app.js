document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o envio do formulário
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Exemplo simples de verificação
    if (username === "admin" && password === "1234") {
        document.getElementById("message").style.color = "green";
        document.getElementById("message").textContent = "Login bem-sucedido!";
    } else {
        document.getElementById("message").style.color = "red";
        document.getElementById("message").textContent = "Usuário ou senha incorretos.";
    }
});