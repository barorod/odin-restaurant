import createTag from './createTag';

const items = [
  {
    name: 'Grilled Salmon Fillet',
    description:
      'Tender Atlantic salmon, lemon-herb butter, roasted vegetables',
  },
  {
    name: 'Truffle Mushroom Risotto',
    description:
      'Creamy Arborio rice, wild mushrooms, truffle oil, Parmesan cheese',
  },
  {
    name: 'Beef Wellington',
    description:
      'Prime beef tenderloin, puff pastry, mushroom duxelles, prosciutto',
  },
  {
    name: 'Mediterranean Mezze Platter',
    description: 'Hummus, baba ganoush, falafel, olives, pita bread, tzatziki',
  },
  {
    name: 'Spicy Thai Green Curry',
    description:
      'Coconut milk-based curry, choice of protein, bamboo shoots, Thai basil',
  },
  {
    name: 'Classic Caesar Salad',
    description:
      'Crisp romaine lettuce, house-made dressing, garlic croutons, anchovies',
  },
];

const menuContainer = createTag('div', { className: 'menuContainer' });

const menuItems = items.map((item, idx) => {
  const itemWrapper = createTag('div', { id: `${idx + 1}` });
  const itemName = createTag('h2', { textContent: `${item.name}` });
  const itemDescription = createTag('p', {
    textContent: `${item.description}`,
  });
  itemWrapper.append(itemName, itemDescription);
  return itemWrapper;
});

menuContainer.append(...menuItems);

export { menuContainer as menu };
