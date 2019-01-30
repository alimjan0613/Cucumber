Feature: Free CRM Login
#Scenario: Free CRm Login Test Case
#Given User is already on login page 
#When title of login page is Free CRM
#Then user enters "alimjan" and "A101613h" 
#Then user clicks on login button
#Then user is on home page
#Then user closes the browser 



Scenario Outline: Free CRm Login Test Case

Given User is already on login page 
When title of login page is Free CRM
Then user enters "<username>" and "<password>" 
Then user clicks on login button
Then user is on home page
Then user closes the browser

Examples: 
| username | password |
| alimjan  | A101613h |
| alimjan  | A101613H |
| Alimjan  | a101613h |
| AlimJan  | A101613h |


