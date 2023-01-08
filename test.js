const webdriver = require('selenium-webdriver');
const browser = new webdriver.Builder()
.withCapabilities({'browserName': 'chrome'})
.build(); 
browser.get
('http://testshop.sedtest-school.ru/');
browser.findElements(webdriver.By.css('[class^="card-body"]')).then(function (links) {
if (links.length == 5) {
    console.log('PASSED')
}
else {
    console.error(`Ожидается 5, найдено ${links.length}`)
}
browser.quit();
});