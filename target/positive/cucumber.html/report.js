$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BuyBook.feature");
formatter.feature({
  "line": 2,
  "name": "Acceptance testing to validate Amazon page",
  "description": "In order to validate that\r\nthe search Books page is working fine\r\nwill do the acceptance testing",
  "id": "acceptance-testing-to-validate-amazon-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Buy-Books"
    }
  ]
});
formatter.before({
  "duration": 10675457901,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 87\nCurrent browser version is 90.0.4430.212 with binary path C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-UDDFKV4\u0027, ip: \u0027192.168.1.101\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: driver.version: SeleniumDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x00C1C0C3+3326147]\n\tOrdinal0 [0x00B00851+2164817]\n\tOrdinal0 [0x00987298+619160]\n\tOrdinal0 [0x00901D92+73106]\n\tOrdinal0 [0x008FE119+57625]\n\tOrdinal0 [0x008FC38A+50058]\n\tOrdinal0 [0x00925F3E+220990]\n\tOrdinal0 [0x00925CAC+220332]\n\tOrdinal0 [0x0092189B+202907]\n\tOrdinal0 [0x00903DF4+81396]\n\tOrdinal0 [0x00904DEE+85486]\n\tOrdinal0 [0x00904D79+85369]\n\tOrdinal0 [0x00B185DC+2262492]\n\tGetHandleVerifier [0x00DA2874+1487204]\n\tGetHandleVerifier [0x00DA23CD+1486013]\n\tGetHandleVerifier [0x00DAA368+1518680]\n\tGetHandleVerifier [0x00DA2F4E+1488958]\n\tOrdinal0 [0x00B0ED0D+2223373]\n\tOrdinal0 [0x00B1A12B+2269483]\n\tOrdinal0 [0x00B1A26F+2269807]\n\tOrdinal0 [0x00B2ECB8+2354360]\n\tBaseThreadInitThunk [0x76F4FA29+25]\n\tRtlGetAppContainerNamedObjectPath [0x77407A7E+286]\n\tRtlGetAppContainerNamedObjectPath [0x77407A4E+238]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat Utilities.SeleniumDriver.\u003cinit\u003e(SeleniumDriver.java:21)\r\n\tat Utilities.SeleniumDriver.setUpDriver(SeleniumDriver.java:41)\r\n\tat Steps.BeforeActions.setup(BeforeActions.java:11)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:72)\r\n\tat org.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:123)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 8,
  "name": "Validate Purchase Harry Potter Book",
  "description": "",
  "id": "acceptance-testing-to-validate-amazon-page;validate-purchase-harry-potter-book",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Buy-Books-Positive"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on the Home Page \"https://www.amazon.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Get the page URL and verify if it is the correct page that is opened",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Select \"Books\" from main drop-down box",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Type \"Harry Potter Books\" on search bar",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Click on Search button icon",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "In the Book Series select Harry Potter in Check Box",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Select the Harry Potter and the Sorcerer\u0027s Stone, Book 1 item",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Select Hardcover",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Print the Item Title in console",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Get the Title Length and print in console",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Select Add To Cart",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Print Item Price in console",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Click on Cart",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Verify selected details in Shopping Cart page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Assert the ‘quantity and print in console",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Assert the Shopping Cart Subtotal Proceed to checkout Subtotal",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Click on Proceed to Checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Click on Create your Amazon Account button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Type  new account details",
  "rows": [
    {
      "comments": [
        {
          "line": 33,
          "value": "#      Examples:"
        }
      ],
      "cells": [
        "username",
        "email",
        "password",
        "reenterPassword"
      ],
      "line": 34
    },
    {
      "cells": [
        "LasanR",
        "lasanr@codegen.net",
        "lasan@123",
        "lasan@123"
      ],
      "line": 35
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.amazon.com/",
      "offset": 23
    }
  ],
  "location": "BuyBookSteps.i_am_on_the_home_page_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BuyBookSteps.get_the_page_url_and_verify_if_it_is_the_correct_page_that_is_opened()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Books",
      "offset": 8
    }
  ],
  "location": "BuyBookSteps.select_something_from_main_dropdown_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter Books",
      "offset": 6
    }
  ],
  "location": "BuyBookSteps.type_something_on_search_bar(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BuyBookSteps.click_on_search_button_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BuyBookSteps.in_the_book_series_select_harry_potter_in_check_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BuyBookSteps.select_the_harry_potter_and_the_sorcerers_stone_book_1_item()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BuyBookSteps.select_hardcover()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BuyBookSteps.print_the_item_title_in_console()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BuyBookSteps.get_the_title_length_and_print_in_console()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BuyBookSteps.select_add_to_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BuyBookSteps.print_item_price_in_console()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BuyBookSteps.click_on_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BuyBookSteps.verify_selected_details_in_shopping_cart_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BuyBookSteps.assert_the_quantity_and_print_in_console()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BuyBookSteps.assert_the_shopping_cart_subtotal_proceed_to_checkout_subtotal()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BuyBookSteps.click_on_proceed_to_checkout_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BuyBookSteps.click_on_create_your_amazon_account_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BuyBookSteps.type_new_account_details(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2708200,
  "error_message": "java.lang.NullPointerException\r\n\tat Steps.AfterAction.tearDown(AfterAction.java:18)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:72)\r\n\tat org.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:123)\r\n",
  "status": "failed"
});
});