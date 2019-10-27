import { AngularnodePage } from './app.po';

describe('angularnode App', function() {
  let page: AngularnodePage;

  beforeEach(() => {
    page = new AngularnodePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
