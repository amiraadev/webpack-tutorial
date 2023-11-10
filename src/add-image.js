import kiwi from "./kiwi.jpg"
function addImage(params) {
    const img = document.createElement('img');
    img.alt = 'kiwi';
    img.width = 300;
    img.src = kiwi;
    const body = document.createElement('body');
    body.appendChild(img);
}