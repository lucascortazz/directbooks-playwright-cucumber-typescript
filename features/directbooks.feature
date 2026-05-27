Feature: DirectBooks public website

  Scenario: Validate homepage content
    Given I open the DirectBooks homepage
    Then I should see the main DirectBooks messaging
    And I should see the Join the Platform call to action

  Scenario: Validate FAQ page content
    Given I open the DirectBooks FAQ page
    Then I should see frequently asked questions
    And I should see information about who can use DirectBooks

  Scenario: Validate Contact page content
    Given I open the DirectBooks Contact page
    Then I should see contact information
    And I should see client services information

  Scenario: Validate Community Portal login page
    Given I open the DirectBooks Community Portal
    Then I should see the login form
    And I should see the forgot password option
