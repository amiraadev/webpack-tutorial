class helloWorldButton {
    render(){
        const button = document.createElement('button');
        button.innerHTML = 'Hello World';
        const body = document.querySelector('body');
        body.appendChild(button);
    }
}

export default helloWorldButton; 