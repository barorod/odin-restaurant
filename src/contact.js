import createTag from './createTag';

const contactContainer = createTag('div', { className: 'contactContainer' });

contactContainer.append(
  createTag('input', { type: 'text', placeholder: 'Enter your name' }),
  createTag('input', { type: 'number', placeholder: 'Enter your name' }),
  createTag('textarea', { placeholder: 'Write your message' })
);

export { contactContainer as contact };
