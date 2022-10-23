const button = document.querySelector("#button-two");
const score = document.querySelector("#score");
const divBlock = document.querySelector("#imgInsert");
let clicks = 0;
let image = document.querySelector("#none")
image.classList.add('hide')
button.addEventListener("click", (where, element) => {
    image.classList.add('hide')
    clicks += 1;
    score.innerHTML = clicks;
    if(clicks%5==0){
        let color = "#";
        color += Math.random().toString(16).slice(2,8);
        button.style.background = color;
    }
    if(clicks==5 || clicks==10 || clicks==50 || clicks==100){
        image.classList.remove('hide');
    }
    // if(clicks%5!=0) {
    //     none_img.parentNode.removeChild(none_img)
    // }
})