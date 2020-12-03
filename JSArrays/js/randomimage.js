const mainImage = document.querySelector("#img");
const button = document.querySelector(".btn");

const images = ["img/index.jpg","img/index2.jpg","img/index3.jpg","img/index4.jpg"];
button.addEventListener('click',()=>{
    console.log("hello");
    let rnd = Math.floor (Math.random()*images.length)
    mainImage.src = images [rnd];
    console.log("Random number:",rnd);
});