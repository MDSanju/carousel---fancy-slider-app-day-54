let images = [
    'images/food-1.png',
    'images/food-2.png',
    'images/food-3.png',
    'images/food-4.png',
    'images/food-5.png',
    'images/food-6.png',
    'images/food-7.png',
    'images/food-8.png',
    'images/food-9.png'
];
let imgIndex = 0;
const imgElement = document.getElementById('slider-image');
setInterval(() => {
    if (imgIndex >= images.length) {
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    imgElement.setAttribute('src', imgUrl);
    imgIndex++;
}, 1000);