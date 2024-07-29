export default {
  title: 'My Component',
  component: 'my-component',
  args: {
    first: 'James',
    middle: 'Earl',
    last: 'Quincy',
  },
};

const Template = ({ first, middle, last }) =>
  `
  <my-component first="${first}" middle="${middle}" last="${last}"></my-component>
`.trim();

export const Default = Template.bind({});
