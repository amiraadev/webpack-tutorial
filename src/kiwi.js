import Heading from './components/heading/heading.js';
import KiwiImage from './components/kiwi-image/kiwi-image.js';
import _ from "lodash";

const heading = new Heading();
// heading.render();
heading.render( _.upperFirst('testing something'));


const kiwiImage = new KiwiImage();
kiwiImage.render();