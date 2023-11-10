import kiwi from './kiwi.jpg';
function addImage() {
    document.addEventListener("DOMContentLoaded", () => {
        const img = document.createElement('img');
        img.alt = 'kiwi';
        img.width = 300;
        img.src = kiwi;

        // Append the image to the existing body
        document.body.appendChild(img);
    });
}
export default addImage;