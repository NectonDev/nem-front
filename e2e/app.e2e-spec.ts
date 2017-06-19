import { NemFrontPage } from './app.po';

describe('nem-front App', () => {
  let page: NemFrontPage;

  beforeEach(() => {
    page = new NemFrontPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
