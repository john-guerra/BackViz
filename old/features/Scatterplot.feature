Feature: Scatterplot

  Scenario: Click a dot
    Given I have my app "http://localhost:8000/"
    And I have ".dot" class
    And I have some devices
    |   label  | width | height |
    |   phone  | 320   |    480 |
    |   tablet | 1024  |    768 |
    When I "click"
    Then I check "embeded" 
