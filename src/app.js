import './normalize.css';
import './style.css';
import { home } from './home';
import { menu } from './menu';
import { contact } from './contact';

const navs = document.querySelectorAll('nav button');
const content = document.querySelector('#content');

const pages = {
  Home: home,
  Menu: menu,
  Contact: contact,
};

navs.forEach((nav) =>
  nav.addEventListener('click', (e) => {
    const pageName = e.target.textContent;
    if (pages[pageName]) {
      content.innerHTML = '';
      content.appendChild(pages[pageName]);
    }
  })
);

content.appendChild(home);

alert('I am bad at styling, I will add it soon!');
