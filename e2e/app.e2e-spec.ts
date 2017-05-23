import { MindStorm2Page } from './app.po';

describe('mind-storm2 App', () => {
  let page: MindStorm2Page;

  beforeEach(() => {
    page = new MindStorm2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
