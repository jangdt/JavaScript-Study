const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
];

const todayImages = images[Math.floor(Math.random()*images.length)];
const bgImage = document.createElement("img");
bgImage.src = `./img/${todayImages}`;
bgImage.width = 720;
bgImage.height = 480;
document.body.appendChild(bgImage);

console.log(bgImage);