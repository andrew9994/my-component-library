import { newE2EPage } from '@stencil/core/testing';
import * as mockPeopleResponse from './__mocks__/swapi-people.json';

describe('my-button-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-button-list></my-button-list>');

    const element = await page.find('my-button-list');
    expect(element).toHaveClass('hydrated');
  });

  it('renders the correct items when clicked on the button', async () => {
    const page = await newE2EPage();
    page.on('response', response => {
      if (response.url() === 'http://localhost:3333/') {
        // stencil workaround, https://github.com/ionic-team/stencil/issues/2434#issuecomment-714776773
        (page as any).removeAllListeners('request');
        page.on('request', request => {
          if (request.url().includes('https://swapi.dev/api/people')) {
            request.respond({
              headers: {"Access-Control-Allow-Origin": "*"},
              body: JSON.stringify(mockPeopleResponse)
            });
          }
          else {
            request.continue();
          }
        });
      }
    });

    await page.setContent('<my-button-list></my-button-list>');

    const button = await page.find('my-button-list >>> my-button');
    await button.click();

    await page.waitForChanges();

    const list = await page.find('my-button-list >>> my-list');

    expect(await list.getProperty('items')).toEqual([
      'Luke Skywalker',
      'C-3PO',
      'R2-D2'
    ]);
  })
});
