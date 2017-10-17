// var webdriver = require('selenium-webdriver'),
//     By = webdriver.By,
//     until = webdriver.until;
//
// var driver = new webdriver.Builder()
//     .forBrowser('firefox')
//     .build();
//
// driver.get('http://www.google.com/ncr');
// driver.findElement(By.name('q')).sendKeys('webdriver');
// driver.findElement(By.name('btnG')).click();
// driver.wait(until.titleIs('webdriver - Google Search'), 1000);
// driver.quit();
//

var webdriver = require("selenium-webdriver");

console.log(webdriver);

function createDriver() {
    var driver = new webdriver.Builder()
        .usingServer('http://localhost:4444/wd/hub')
        .withCapabilities(webdriver.Capabilities.chrome())
        .build();
    driver.manage().timeouts().setScriptTimeout(10000);
    return driver;
}

var driver = createDriver();
driver.get("http://www.google.com");

driver.getTitle().then(function (title) {
    console.log(title);
});

driver.quit();