@Customer
Feature: Customer page feature
  As a user I customer page functionality on xyz bank website

  Scenario: Customer should login and logout successfully
    Given I am on home page
    When I click on customer login tab
    And I select customer name "Rony Roy"
    And I click on login button
    And I verify logout button is displayed
    And I click on logout button
    Then I should see your name lable is displayed

  Scenario: Customer should deposit money successfully
    Given I am on home page
    When I click on customer login tab
    And I select customer name "Rony Roy"
    And I click on login button
    And I click on deposit button
    And I enter amount "100"
    And I click on deposit wihtdraw button
    Then I verifty depsit successful message displayed on the screen