Feature: Yahoo application testing

Scenario: Yahoo Login Test
Given user opens yahoo login page
Then user enters loginid
Then user enters password
And user clicks on signin button
And close the browser

Scenario: Yahoo login title page
Given user opens yahoo login page
Then get the title of yahoo login page and verify
And close the browser