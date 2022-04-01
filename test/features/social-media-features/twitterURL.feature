Feature: twitter URL
  Background:
    Given I open Apple TV page

  Scenario: should url starts with urlStartText and contains urlText
    When I click on twitter button
    Then I should be on twitter page
