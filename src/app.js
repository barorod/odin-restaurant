import './normalize.css';
import './style.css';
const home = require('./home');
const menu = require('./menu');

const navs = document.querySelectorAll('nav button');
const content = document.querySelector('#content');

navs.forEach((nav) =>
  nav.addEventListener('click', () => {
    if (nav.textContent === 'Menu') {
      content.innerHTML = '';
      content.appendChild(menu);
    }
  })
);

content.appendChild(home);
