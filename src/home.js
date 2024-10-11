const createTag = require('./createTag');

const home = createTag('div', { className: 'home' });

const title = createTag('h1', {
  className: 'title',
  textContent: 'Welcome to Restaurant',
});
const subTitle = createTag('p', {
  className: 'subTitle',
  textContent: 'Savor the Flavor of Authentic Cuisine',
});

home.appendChild(title);
home.appendChild(subTitle);

module.exports = home;
