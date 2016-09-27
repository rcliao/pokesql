import { PokesqlPage } from './app.po';

describe('pokesql App', function() {
  let page: PokesqlPage;

  beforeEach(() => {
    page = new PokesqlPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
