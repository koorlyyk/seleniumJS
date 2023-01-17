module.exports = {
    before(browser) {
        browser
        .url('http://testshop.sedtest-school.ru/')
        .waitForElementVisible('css selector', 'input.form-control', 'Страница загружена')
    },
    'Open-and-check-mainpage': function (browser) {
    browser
    .assert.urlEquals('http://testshop.sedtest-school.ru/')
    },
    'Assert-value-on-search': function (browser) {
        browser
        .setValue('css selector', 'input.form-control', ['car', browser.Keys.ENTER])
        browser.assert.urlContains('car')
    },
    'Doublecheck-search-another-value': function (browser) {
        browser
        .useXpath()
        .clearValue('//input[@name="search"]')
        .setValue('//input[@name="search"]', ['Монокуляр', browser.Keys.ENTER])
        browser.assert.urlContains('%D0%9C%D0%BE%D0%BD%D0%BE%D0%BA%D1%83%D0%BB%D1%8F%D1%80')
    }
    };