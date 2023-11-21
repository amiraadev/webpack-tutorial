import "./heading.scss";
class Heading {
    render(custom_title) {
        const h1 = document.createElement('h1');
        const body = document.querySelector('body');
        h1.innerHTML ="webpack is awesome "+custom_title;
        body.appendChild(h1);
    }
}

export default Heading;