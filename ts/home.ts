
const nameDiv = <HTMLInputElement>document.querySelector("#name")
const nickDiv = <HTMLInputElement>document.querySelector("#nickname")

// 
fetch("https://semcontrato.azurewebsites.net/home", {
    // fetch("http://localhost:3000/home", {
    method: "GET",
    mode: "cors",
    headers: {
        'Accept': '*/*',
        'Content-Type': ''
    }
})
    .then(res => res.json())
    .then(res => {

        nameDiv.textContent = res.name;
        nickDiv.textContent = res.nickname
    })