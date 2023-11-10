class helloWorldButton {
    render(){
        const button = document.createElement('button');
        button.innerHTML = 'Hello World';
        const body = document.querySelector('body');
        // Use 'addEventListener' instead of 'onClick'
        button.addEventListener('click', function () {
            const p = document.createElement('p'); // Specify the tag name 'p'
            p.innerHTML = 'Hello everyone! We are learning webpack'; // Fix the innerHTML
            body.appendChild(p);
        });
        body.appendChild(button);
    }
}

export default helloWorldButton; 