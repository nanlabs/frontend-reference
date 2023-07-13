import Select from '.';

const meta = {
  component: Select,
  tags: ['autodocs'],
};

export default meta;

export const SelectDemo = {
  args: {
    onChange: () => console.log('onChange'),
    items: [
      { label: 'The Legend of Zelda: Ocarina of Time', value: 'The Legend of Zelda: Ocarina of Time' },
      { label: 'Minecraft', value: 'Minecraft' },
      { label: 'Grand Theft Auto V', value: 'Grand Theft Auto V' },
    ],
    id: '1',
    title: 'What is the best selling video game of all time?',
  },
};
