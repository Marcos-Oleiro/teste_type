const nameDiv = document.querySelector("#name");
const nickDiv = document.querySelector("#nickname");
fetch("http://localhost:3000/home", {
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
    nickDiv.textContent = res.nickname;
});
