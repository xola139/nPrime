import { EPrimePage } from './app.po';

describe('e-prime App', () => {
  let page: EPrimePage;

  beforeEach(() => {
    page = new EPrimePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
