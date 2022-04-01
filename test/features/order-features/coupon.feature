@clearCart
Feature: Coupons

  Scenario Outline: Applying coupons for unregistered users
    Given User opens shop
    When User opens 'Show All Laptops & Notebooks' in 'Laptops & Notebooks'
    And User adds '<product>' item to cart
    When User opens cart
    And User applies '<coupon>' coupon
    Then Message with text '<notification>' appeared
    And Item price '<kindOfPrice>' should be equal to <price>

    Examples:
      | product | coupon    | notification                                                           | kindOfPrice      | price   |
      | Air     | LuckyUser | Warning: Coupon is either invalid, expired or reached its usage limit! | Total            | 1200.00 |
      | Air     | 2128506   | Success: Your coupon discount has been applied!                        | Coupon (2128506) | -15.00  |
