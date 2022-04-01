Feature: Delete product from shopping cart

    The ability to delete any product you don't like from the shopping cart

    Scenario: Delete what you want from the shopping cart
        Given Variety of products in the best online store
        And I add 'iMac' to my shopping cart
        When I changed my mind and delete unnecessary product from the shopping cart
        Then I see sad message 'Your shopping cart is empty!'
        And I see that my shopping cart is empty - 0