describe('get list of element', () =>{
//Global varibale
var fnum=element(by.model('first'));
var snum=element(by.model('second'));
var click=element(by.id('gobutton'));
var go=element(by.className('ng-binding'));
var history=element.all(by.repeater('result in memory'));

beforeEach(() => {
    browser.get('https://juliemr.github.io/protractor-demo/');
    browser.driver.manage().window().maximize();
});

function add(a,b){

    fnum.sendKeys(a);
    snum.sendKeys(b);
    click.click();
}

it('check the hisoryt',()=>
{
add(5,2);
add(3,2);
add(1,1);
expect(history.count()).toEqual(3);

});

});