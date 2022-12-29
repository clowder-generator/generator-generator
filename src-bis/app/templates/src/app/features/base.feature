Feature: Basic generation
  A basic generator generation with one prompt and no args

  Scenario: The file file with name 'generated'
    Given a generator
    When I call it with the following prompt answer
      | prompt | answer |
      | name   | hello  |
    Then I should have a file 'generated.md' with the content
      """markdown
      hello
      ===========

      This is a basic file generated using the generator
      """