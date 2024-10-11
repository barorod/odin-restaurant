import createTag from './createTag';

const homeContainer = createTag('div', { className: 'homeContainer' });

const title = createTag('h1', {
  className: 'title',
  textContent: 'Welcome to Restaurant',
});
const subTitle = createTag('p', {
  className: 'subTitle',
  textContent: 'Savor the Flavor of Authentic Cuisine',
});

homeContainer.appendChild(title);
homeContainer.appendChild(subTitle);

export { homeContainer as home };
