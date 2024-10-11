const createTag = (tag, { className = '', ...options }) => {
  const element = document.createElement(tag);

  for (const [key, value] of Object.entries(options)) {
    element[key] = value;
  }

  //   Object.assign(element, options); // Better way to write the line above

  element.className = className;

  return element;
};

module.exports = createTag;
