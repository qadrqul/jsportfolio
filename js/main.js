const button = document.querySelector("#button-two");
const score = document.querySelector("#score");
const catImage = document.getElementById('cat-img');
let clicks = 0;
fetch('https://aws.random.cat/meow')
    .then(response => response.json())
    .then(data => {
        catImage.innerHTML = `<img src="${data.file}"/>`;
    })
button.addEventListener("click", (where, element) => {
    clicks += 1;
    score.innerHTML = clicks;
    if(clicks%2===0){
        let color = "#";
        color += Math.random().toString(16).slice(2,8);
        button.style.background = color;
    }
    fetch('https://aws.random.cat/meow')
        .then(response => response.json())
        .then(data => {
            catImage.innerHTML = `<img src="${data.file}"/>`;
        })
})
