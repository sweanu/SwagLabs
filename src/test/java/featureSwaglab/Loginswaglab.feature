@Login
Feature: This feature is to test the SwagLabs application for both success and failure scenario using parameters and scenario outline

  Background: 
    Given I have launched the application

  Scenario: Login success scenario using parameters
    When I enter the username as "standard_user"
    And I enter the password as "secret_sauce"
    And I click the login button
    Then I should land on home page "https://www.saucedemo.com/inventory.html"

  Scenario Outline: Login Failure scenario using Scenario outline
    When I enter the username as "<UserName>"
    And I enter the password as "<Password>"
    And I click the login button
    Then I should get an error message as "<Error>"

    Examples: 
      | UserName        | Password     | Error                                                                     |
      | standard_user   |        12345 | Epic sadface: Username and password do not match any user in this service |
      | locked_out_user | secret_sauce | Epic sadface: Sorry, this user has been locked out.                       |
