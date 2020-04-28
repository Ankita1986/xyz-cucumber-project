$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/bank/recources/featurefile/bankmanager.feature");
formatter.feature({
  "line": 2,
  "name": "Bank manager feature",
  "description": "As a user I want to check bank manager functionality on xyz bank website",
  "id": "bank-manager-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@BankManager"
    }
  ]
});
formatter.before({
  "duration": 12575300700,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 5,
      "value": "#  Scenario: Bank manager should add customer successfully"
    },
    {
      "line": 6,
      "value": "#    Given I am on home page"
    },
    {
      "line": 7,
      "value": "#    When I click on bank manager login tab"
    },
    {
      "line": 8,
      "value": "#    And I click on add customer tab"
    },
    {
      "line": 9,
      "value": "#    And I enter first name \"Rony\""
    },
    {
      "line": 10,
      "value": "#    And I enter last name \"Roy\""
    },
    {
      "line": 11,
      "value": "#    And I enter post code \"HA2 6JT\""
    },
    {
      "line": 12,
      "value": "#    And I click on add customer button"
    },
    {
      "line": 13,
      "value": "#    Then I should see customer added successfully message"
    }
  ],
  "line": 15,
  "name": "Bank manager should delete customer successfully",
  "description": "",
  "id": "bank-manager-feature;bank-manager-should-delete-customer-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I click on bank manager login tab",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click on customers tab",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I search customer by name \"Rony Roy\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on delete button",
  "keyword": "Then "
});
formatter.match({
  "location": "BankTestSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 144690000,
  "status": "passed"
});
formatter.match({
  "location": "BankTestSteps.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 195115700,
  "status": "passed"
});
formatter.match({
  "location": "BankTestSteps.iClickOnCustomersTab()"
});
formatter.result({
  "duration": 259198600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rony Roy",
      "offset": 27
    }
  ],
  "location": "BankTestSteps.iSearchCustomerByName(String)"
});
formatter.result({
  "duration": 484077900,
  "status": "passed"
});
formatter.match({
  "location": "BankTestSteps.iClickOnDeleteButton()"
});
formatter.result({
  "duration": 20165834400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//button[contains(text(),\u0027Delete\u0027)]\"}\n  (Session info: chrome\u003d81.0.4044.129)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-QHQ0BOBD\u0027, ip: \u0027192.168.0.36\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.129, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\ajkas\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:54657}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 8ec9f3242f27de741a870ad45cdd0453\n*** Element info: {Using\u003dxpath, value\u003d//button[contains(text(),\u0027Delete\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat com.bank.utility.Utility.clickOnElement(Utility.java:51)\r\n\tat com.bank.pages.CustomersPage.deleteCustomer(CustomersPage.java:37)\r\n\tat com.bank.cucumber.stepdefs.BankTestSteps.iClickOnDeleteButton(BankTestSteps.java:78)\r\n\tat ✽.Then I click on delete button(src/test/java/com/bank/recources/featurefile/bankmanager.feature:20)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1345344500,
  "status": "passed"
});
});