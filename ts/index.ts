const form = document.querySelector("#formLogin")

const userName = <HTMLInputElement>document.querySelector("#userName")

const senha = <HTMLInputElement>document.querySelector("#userPass")



form.addEventListener("submit", (event: Event) => {


    event.preventDefault();

    const loginData = {
        userName: "spell",
        senha: "123456"
    }


    if (userName.value === loginData.userName && senha.value === loginData.senha)
        window.location.href = "home.html"


    // console.log(userName.value)
    // console.log(senha.value)
    // if ()


})