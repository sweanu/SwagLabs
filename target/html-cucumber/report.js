$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/featureSwaglab/AddToCart.feature");
formatter.feature({
  "name": "This feature is to test the SwagLabs application for both success and failure scenario using parameters and scenario outline",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Addtocart"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the username as \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.i_enter_the_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the password as \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.i_enter_the_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.i_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should land on home page \"https://www.saucedemo.com/inventory.html\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.i_should_land_on_home_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login success scenario using parameters",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Addtocart"
    }
  ]
});
formatter.step({
  "name": "I click the cart button of the product to add it to cart",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.AddToCartSd.i_click_the_cart_button_of_the_product_to_add_it_to_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on shopping cart",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.AddToCartSd.i_click_on_shopping_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the item on cart page with \"Sauce Labs Backpack\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.AddToCartSd.i_verify_the_item_on_cart_page_with(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/featureSwaglab/Loginswaglab.feature");
formatter.feature({
  "name": "This feature is to test the SwagLabs application for both success and failure scenario using parameters and scenario outline",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login success scenario using parameters",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "I enter the username as \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.i_enter_the_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the password as \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.i_enter_the_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.i_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should land on home page \"https://www.saucedemo.com/inventory.html\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.i_should_land_on_home_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Login Failure scenario using Scenario outline",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter the username as \"\u003cUserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I enter the password as \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "name": "I should get an error message as \"\u003cError\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password",
        "Error"
      ]
    },
    {
      "cells": [
        "standard_user",
        "12345",
        "Epic sadface: Username and password do not match any user in this service"
      ]
    },
    {
      "cells": [
        "locked_out_user",
        "secret_sauce",
        "Epic sadface: Sorry, this user has been locked out."
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login Failure scenario using Scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "I enter the username as \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.i_enter_the_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the password as \"12345\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.i_enter_the_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.i_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get an error message as \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.i_should_get_an_error_message_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login Failure scenario using Scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "I enter the username as \"locked_out_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.i_enter_the_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the password as \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.i_enter_the_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.i_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get an error message as \"Epic sadface: Sorry, this user has been locked out.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.LoginStepDefinition.i_should_get_an_error_message_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});