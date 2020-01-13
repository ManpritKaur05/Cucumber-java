$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/stepDefinition/yahootest.feature");
formatter.feature({
  "line": 1,
  "name": "Yahoo application testing",
  "description": "",
  "id": "yahoo-application-testing",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Yahoo Login Test",
  "description": "",
  "id": "yahoo-application-testing;yahoo-login-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user opens yahoo login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters loginid",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user enters password",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "YahooLoginTest_StepDef.user_opens_yahoo_login_page()"
});
formatter.result({
  "duration": 29683084100,
  "status": "passed"
});
formatter.match({
  "location": "YahooLoginTest_StepDef.user_enters_loginid()"
});
formatter.result({
  "duration": 509914800,
  "status": "passed"
});
formatter.match({
  "location": "YahooLoginTest_StepDef.user_enters_password()"
});
formatter.result({
  "duration": 22473571300,
  "status": "passed"
});
formatter.match({
  "location": "YahooLoginTest_StepDef.user_clicks_on_signin_button()"
});
formatter.result({
  "duration": 52298560300,
  "status": "passed"
});
formatter.match({
  "location": "YahooLoginTest_StepDef.close_the_browser()"
});
formatter.result({
  "duration": 936500300,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Yahoo login title page",
  "description": "",
  "id": "yahoo-application-testing;yahoo-login-title-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "user opens yahoo login page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "get the title of yahoo login page and verify",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "YahooLoginTest_StepDef.user_opens_yahoo_login_page()"
});
formatter.result({
  "duration": 27492716100,
  "status": "passed"
});
formatter.match({
  "location": "YahooLoginTest_StepDef.get_the_title_of_yahoo_login_page_and_verify()"
});
formatter.result({
  "duration": 20463900,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cYahoo [– ]login\u003e but was:\u003cYahoo [- ]login\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat stepDefinition.YahooLoginTest_StepDef.get_the_title_of_yahoo_login_page_and_verify(YahooLoginTest_StepDef.java:49)\r\n\tat ✽.Then get the title of yahoo login page and verify(src/main/java/stepDefinition/yahootest.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "YahooLoginTest_StepDef.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});