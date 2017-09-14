import { GameOverPage } from './app.po';

describe('game-over App', () => {
  let page: GameOverPage;

  beforeEach(() => {
    page = new GameOverPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
