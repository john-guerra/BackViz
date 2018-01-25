Feature: NodeTree

  Scenario: Click a node
    Given I have my app "http://localhost:9000/"
    And I have ".nodeCircle" class
    And I have some devices
    |   label  | width | height |
    |   phone  | 320   |    480 |
    |   tablet | 1024  |    768 |
    When I "click"
    Then I check "expansion"

  Scenario: Drag a node
    Given I have my app "http://localhost:9000/"
    And I have some devices
    |   label  | width | height |
    |   phone  | 320   |    480 |
    |   tablet | 1024  |    768 |
    When I "drag"
    Then I check "move"