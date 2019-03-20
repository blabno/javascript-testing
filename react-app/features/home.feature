Feature: Home page

  Scenario: Visit home page click "Say hello" button
    When I navigate to home page
    Then I should see "Say hello" button
    Then I not should see "Hello World" greeting
    When I click "Say hello" button
    Then I should not see "Say hello" button
    Then I should see "Hello World" greeting
