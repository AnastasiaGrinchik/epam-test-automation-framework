Feature: Review

  Background: Open home page
    Given Open home page

  Scenario: The success message appears after submitting review
    When Click iPhone
    When Click Reviews
    When Fill and submit the review the fully completed form
    When Get the success message after submitting a form
    Then The message should include the text 'It has been submitted'

  Scenario: The failed message appears after submitting short review
    When Click macBook
    When Click Reviews
    When Fill and submit the review the form with a small number of characters
    When Get the failed message after submitting a form
    Then The message should include the text 'Warning: Review Text must be between 25 and 1000 characters'
