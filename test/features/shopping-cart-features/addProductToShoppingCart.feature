Feature: Add product to shopping cart

    The ability to add any product you like to the shopping cart

    Scenario: Add what you want to the shopping cart
        Given Variety of products in the best online store
        When I add 1 dream product 'iMac' to the shopping cart
        Then I see success notification 'Success: You have added iMac to your shopping cart!'
        And I see shopping cart with chosen 1 'iMac'