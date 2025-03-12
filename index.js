let foods = ["makarna","yumurta","pilav","mantı","börek","kek","cheesecake","hamburger"]

let chooseFood = Math.floor((Math.random()*8));
console.log(foods.length);



document.querySelector("button").addEventListener("click", changeFood);

function changeFood () {
let chooseFood = Math.floor((Math.random()*8));
let nePisirsem = foods[chooseFood];
document.querySelector("img").setAttribute("src","./assets/images/" + nePisirsem + ".jpg")
}


