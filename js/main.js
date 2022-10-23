const button = document.querySelector("#button-two");
const score = document.querySelector("#score");
let clicks = 0;
let image = document.querySelector("#none")
image.classList.add('hideImg')
button.addEventListener("click", (where, element) => {
    image.classList.add('hideImg')
    clicks += 1;
    score.innerHTML = clicks;
    if(clicks%2===0){
        let color = "#";
        color += Math.random().toString(16).slice(2,8);
        button.style.background = color;
    }
    if(clicks===5 || clicks===10 || clicks===50 || clicks===100){
        image.classList.remove('hideImg');
    }
})