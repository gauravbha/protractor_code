describe('google open', ()=>{
    it('testing google opening', ()=>{
        browser.waitForAngularEnabled(false);
        browser.get('https://www.google.com/');
        expect(browser.getTitle()).toEqual('Google');

    });

});