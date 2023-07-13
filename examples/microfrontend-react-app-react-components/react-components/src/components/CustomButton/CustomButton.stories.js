import CustomButton from '.';

const meta = {
  component: CustomButton,
  tags: ['autodocs'],
};

export default meta;

export const Primary = {
  args: {
    onClick: () => console.log('onClick'),
    label: 'button',
    disabled: false,
    loading: false,
    variant: 'contained',
  },
};

export const Secondary = {
  args: {
    ...Primary.args,
    variant: 'outlined',
  },
};
