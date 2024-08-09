import { newE2EPage } from '@stencil/core/testing';

describe('my-button-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-button-list></my-button-list>');

    const element = await page.find('my-button-list');
    expect(element).toHaveClass('hydrated');
  });
});
