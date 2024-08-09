export default {
  title: 'My List',
  component: 'my-list',
  args: {
    items: ['Item 1', 'Item 2', 'Item 3'],
  },
};

const Template = ({ items }) =>
  `
  <my-list />
  <script>
    (function () {
      const list = document.querySelector("my-list");
      list.items = ${JSON.stringify(items)};
    })();
  </script>
`.trim();

export const Default = Template.bind({});
