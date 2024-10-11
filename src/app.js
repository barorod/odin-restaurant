import './normalize.css';
import './style.css';
const createTag = require('./createTag');

const h1 = createTag('h1', { className: 'test', textContent: 'Woah' });
const content = document.querySelector('#content');
content.appendChild(h1);
