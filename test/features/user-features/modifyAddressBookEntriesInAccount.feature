Feature: Modifying address

  Background: Open home page
    Given Open home page

  Scenario: Address changed successfully
    When Go to login page
    When Log In
    When Go to modify address page
    When Click New Address
    When Fill the form with the address and send it
    When Get the message after submitting address modifying form
    Then The message should be 'Your address has been successfully added'
