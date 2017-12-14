import { HelloHttpPage } from './app.po';

describe('hello-http App', () => {
  let page: HelloHttpPage;

  beforeEach(() => {
    page = new HelloHttpPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
