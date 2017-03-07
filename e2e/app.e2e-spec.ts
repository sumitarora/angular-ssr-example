import { MySsrPage } from './app.po';

describe('my-ssr App', () => {
  let page: MySsrPage;

  beforeEach(() => {
    page = new MySsrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
