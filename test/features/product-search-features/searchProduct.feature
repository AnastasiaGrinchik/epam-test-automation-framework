Feature: search product
  Background:
    Given I open awesome shop page

  Scenario: should return product Apple Cinema 30"
    When I search product Apple Cinema 30"
    Then I should see the text Apple Cinema 30" in the product that appears on the results page
