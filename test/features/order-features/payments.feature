@reloadSession
Feature: Payments

  Background:
    Given User opens shop
    * User opens 'Show All Laptops & Notebooks' in 'Laptops & Notebooks'
    * User adds 'Air' item to cart
    * User opens checkout

  Scenario: Possibility of payment through PayPal by Visa as an unregistered user
    Given 'unregisteredUser' fills required fields in checkout with 'defaultAddress'
    When User pays by 'visaPaymentCard'
    Then Order confirmation notification should appear

  Scenario: Impossibility of payment through PayPal by Mastercard as an unregistered user
    Given 'unregisteredUser' fills required fields in checkout with 'defaultAddress'
    When User pays by 'mastercardPaymentCard'
    Then Order creation error should appear

  Scenario: Possibility of payment through PayPal by Credit as a registered user
    Given 'registeredUser' fills required fields in checkout with 'existingAddress'
    When User pays by 'credit'
    Then Order confirmation notification should appear


