describe('many it function int his', function(){

//Global varibale
var fnum=element(by.model('first'));
var snum=element(by.model('second'));
var click=element(by.id('gobutton'));
var go=element(by.className('ng-binding'));

beforeEach(() => {
    browser.get('https://juliemr.github.io/protractor-demo/');
});

//First Test Cases
it('addition', function()
 {
fnum.sendKeys(15);
snum.sendKeys(25);
click.click();
expect(go.getText()).toEqual('40');
browser.driver.sleep(3000)
    
});
//Second Test Cases
it('addtion of number in decimal', () => {
fnum.sendKeys(25.8);
snum.sendKeys(99.7);
click.click();
browser.driver.sleep(3000);
expect(go.getText()).toEqual('124');
});

it('should read value for textbox', () =>{

fnum.sendKeys(5);
expect(fnum.getAttribute('value')).toEqual('5');
});

});