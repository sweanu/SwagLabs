@Addtocart
Feature: This feature is to test the SwagLabs application for both success and failure scenario using parameters and scenario outline

  Background: 
    Given I have launched the application
    When I enter the username as "standard_user"
    And I enter the password as "secret_sauce"
    And I click the login button
    And I should land on home page "https://www.saucedemo.com/inventory.html"

  Scenario: Login success scenario using parameters
    When I click the cart button of the product to add it to cart
    And I click on shopping cart
    Then I verify the item on cart page with "Sauce Labs Backpack"
