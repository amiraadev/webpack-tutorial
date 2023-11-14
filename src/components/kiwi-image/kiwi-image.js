import kiwi from './kiwi.jpg';
import './kiwi-image.js';

class KiwiImage {
    render(){
        const img = document.createElement('img');
        img.src = kiwi;
        img.alt = "kiwi";
        img.classList.add("kiwi-img");

        const bodyDomElement = document.querySelector("body");
        bodyDomElement.appendChild(img);
    }
}

export default KiwiImage;