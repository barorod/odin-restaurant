import './normalize.css';
import './style.css';
const createHomeContent = require('./home');

const content = document.querySelector('#content');

content.appendChild(createHomeContent());
