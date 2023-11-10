import kiwi from './kiwi.jpg';
import altText from './altText.txt';
function addImage() {
    document.addEventListener("DOMContentLoaded", () => {
        const img = document.createElement('img');
        img.alt = altText;
        img.width = 300;
        img.src = kiwi;

        // Append the image to the existing body
        document.body.appendChild(img);
    });
}
export default addImage;