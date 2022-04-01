Feature: price of Product in Russian Rubles
  Background:
    Given I open Apple TV page
    When I click on Currency Rus Rub button

  Scenario: should return current value of the product: currentValue
    Then I should see 7,830.95 ₽ in current price

  Scenario: should return product price before discount: beforeDiscountValue
    Then I should see 8,701.06 ₽ in before Discount price

  Scenario: should return ex tax: exTaxValue
    Then I should see 6,525.79 ₽ in exTax price

  Scenario: should return price 10 or more: tenPriceValue
    Then I should see 7,656.93 ₽ in 10 or more price

  Scenario: should return price 20 or more: twentyPriceValue
    Then I should see 6,699.81 ₽ in 20 or more price

  Scenario: should return price 30 or more: thirtyPriceValue
    Then I should see 5,742.70 ₽ in 30 or more price