describe('My first test', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  // beforeEach(async () => {
  //   await device.reloadReactNative();
  // });

  it('should have a menssage about cancel', async () => {
    const info = await element(by.text('Cancel anytime. Ofter terms apply.'));

    await expect(info).toBeVisible();
  });

  it('should subscribe to the premium plan', async () => {
    await element(by.id('option-premium')).tap();
    await element(by.id('input-email')).typeText('rodrigo@gmail.com');
    await element(by.id('keyboard')).tap();
    await element(by.id('button-subscribe')).tap();

    await device.takeScreenshot('snapshot-premium-plan-test')
    await expect(element(by.id('confirmation-message'))).toBeVisible();
 
  });

});
