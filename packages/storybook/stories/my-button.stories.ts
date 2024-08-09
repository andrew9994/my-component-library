export default {
  title: 'My Button',
  component: 'my-button',
  args: {
    unnamedSlot: 'Button'
  },
};

const Template = ({ unnamedSlot }) =>
  `
  <my-button>${unnamedSlot}</my-button>
`.trim();

export const Default = Template.bind({});
