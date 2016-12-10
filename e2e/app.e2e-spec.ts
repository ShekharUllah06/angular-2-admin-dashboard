import { Angular2AdminDashboardPage } from './app.po';

describe('angular-2-admin-dashboard App', function() {
  let page: Angular2AdminDashboardPage;

  beforeEach(() => {
    page = new Angular2AdminDashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
