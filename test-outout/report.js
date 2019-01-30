$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login",
  "description": "",
  "id": "free-crm-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 2,
      "value": "#Scenario: Free CRm Login Test Case"
    },
    {
      "line": 3,
      "value": "#Given User is already on login page"
    },
    {
      "line": 4,
      "value": "#When title of login page is Free CRM"
    },
    {
      "line": 5,
      "value": "#Then user enters \"alimjan\" and \"A101613h\""
    },
    {
      "line": 6,
      "value": "#Then user clicks on login button"
    },
    {
      "line": 7,
      "value": "#Then user is on home page"
    },
    {
      "line": 8,
      "value": "#Then user closes the browser"
    }
  ],
  "line": 12,
  "name": "Free CRm Login Test Case",
  "description": "",
  "id": "free-crm-login;free-crm-login-test-case",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user closes the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "free-crm-login;free-crm-login-test-case;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 22,
      "id": "free-crm-login;free-crm-login-test-case;;1"
    },
    {
      "cells": [
        "alimjan",
        "A101613h"
      ],
      "line": 23,
      "id": "free-crm-login;free-crm-login-test-case;;2"
    },
    {
      "cells": [
        "alimjan",
        "A101613H"
      ],
      "line": 24,
      "id": "free-crm-login;free-crm-login-test-case;;3"
    },
    {
      "cells": [
        "Alimjan",
        "a101613h"
      ],
      "line": 25,
      "id": "free-crm-login;free-crm-login-test-case;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 23,
  "name": "Free CRm Login Test Case",
  "description": "",
  "id": "free-crm-login;free-crm-login-test-case;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user enters \"alimjan\" and \"A101613h\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user closes the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_already_on_login_page()"
});
formatter.result({
  "duration": 5932073975,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 112586332,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alimjan",
      "offset": 13
    },
    {
      "val": "A101613h",
      "offset": 27
    }
  ],
  "location": "LoginStepDefinitions.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 1752513776,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1355889037,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_home_page()"
});
formatter.result({
  "duration": 8423562,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_closes_the_browser()"
});
formatter.result({
  "duration": 786501222,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Free CRm Login Test Case",
  "description": "",
  "id": "free-crm-login;free-crm-login-test-case;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user enters \"alimjan\" and \"A101613H\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user closes the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_already_on_login_page()"
});
formatter.result({
  "duration": 5017994748,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 17593609,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alimjan",
      "offset": 13
    },
    {
      "val": "A101613H",
      "offset": 27
    }
  ],
  "location": "LoginStepDefinitions.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 1833768205,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1410859353,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_home_page()"
});
formatter.result({
  "duration": 30192667,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_closes_the_browser()"
});
formatter.result({
  "duration": 2917157060,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Free CRm Login Test Case",
  "description": "",
  "id": "free-crm-login;free-crm-login-test-case;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user enters \"Alimjan\" and \"a101613h\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user closes the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_already_on_login_page()"
});
formatter.result({
  "duration": 5176555299,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 28665420,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alimjan",
      "offset": 13
    },
    {
      "val": "a101613h",
      "offset": 27
    }
  ],
  "location": "LoginStepDefinitions.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 1405154422,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1416013630,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_home_page()"
});
formatter.result({
  "duration": 120870589,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_closes_the_browser()"
});
formatter.result({
  "duration": 769512240,
  "status": "passed"
});
});