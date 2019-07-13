const form = document.querySelector("#formLogin");
const userName = document.querySelector("#userName");
const senha = document.querySelector("#userPass");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const loginData = {
        userName: "spell",
        senha: "123456"
    };
    if (userName.value === loginData.userName && senha.value === loginData.senha)
        window.location.href = "home.html";
});
