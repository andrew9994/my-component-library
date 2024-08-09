import { newSpecPage } from '@stencil/core/testing';
import { MyButtonList } from '../my-button-list';

describe('my-button-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyButtonList],
      html: `<my-button-list></my-button-list>`,
    });
    expect(page.root).toEqualHtml(`
      <my-button-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-button-list>
    `);
  });
});
