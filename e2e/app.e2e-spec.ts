import { StartupPage } from './app.po';

describe('startup App', () => {
  let page: StartupPage;

  beforeEach(() => {
    page = new StartupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
