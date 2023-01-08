Feature: Test incomplete or invalid prompt

  Scenario: Calling the generator with weird input prompt for npm name
    Given a generator
    When I call it with the following prompt answer
      | prompt      | answer            |
      | name        | generator-name#$% |
      | version     | 0.1.0             |
      | description | my uber desc      |
    Then I should have an error
    And the error should contain the message 'invalid string with special char'