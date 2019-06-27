describe('Enter name feature', function()
{
    it('should enter name as Tom', function()
    {

         browser.get('https://angularjs.org/');
         element(by.model('yourName')).sendKeys('Tom');

         var text=element(by.xpath('/html/body/div[2]/div[1]/div[2]/div[2]/div/h1'));

         expect(text.getText()).toEqual('Hello Tom!');
         
    });
});
describe('free CRM title test', function()
{
    it('get free crm title', function() 
     {
        
        browser.get('https://juliemr.github.io/protractor-demo/');
        expect(browser.getTitle()).toEqual('Super Calculator');
        browser.driver.sleep(1000);
        element(by.model('first')).sendKeys('15');
        browser.driver.sleep(1000);
        element(by.model('second')).sendKeys('15');
        browser.driver.sleep(1000);
        element(by.id('gobutton')).click();
        browser.driver.sleep(6000);
        expect(element(by.className('ng-binding')).getText()).toEqual('30');      

    });


});



