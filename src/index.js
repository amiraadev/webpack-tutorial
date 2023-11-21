import helloWorldButton from './components/hello-world-button/hello-world-button.js';
import Heading from './components/heading/heading.js';
import _ from "lodash";
const helloButton = new helloWorldButton();
const Header = new Heading();

// Header.render();
Header.render( _.upperFirst('testing something'));
helloButton.render();

if(process.env.NODE_ENV === 'production'){
    console.log('Production mode');
}else if (process.env.NODE_ENV === 'development'){
    console.log('Development mode');
}





// import helloWorld from './hello-world.js' ;
// import addImage from './add-image.js' ;

// helloWorld();
// addImage();
