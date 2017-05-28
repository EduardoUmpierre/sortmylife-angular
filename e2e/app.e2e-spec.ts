import { SortmylifeAngularPage } from './app.po';

describe('sortmylife-angular App', () => {
  let page: SortmylifeAngularPage;

  beforeEach(() => {
    page = new SortmylifeAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
