import Item from './';

const meta = {
  component: Item,
  tags: ['autodocs'],
};

export default meta;

export const ItemDemo = {
  args: {
    label: 'Item',
    index: 0,
    disabled: false,
    selected: false,
    correctAnswer: 'The Legend of Zelda: Ocarina of Time',
    setAnswer: () => {},
  },
};
