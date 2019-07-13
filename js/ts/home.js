const nameDiv = document.querySelector("#name");
const nickDiv = document.querySelector("#nickname");
fetch("http://localhost/home", {
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
