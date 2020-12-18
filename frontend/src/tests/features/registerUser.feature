Feature: Is it Sunday yet?

    Everybody wants to know when it's Sunday

    Scenario: Friday isn't Sunday
        Given today is Friday
        When I ask whether it's Friday yet
        Then I should be told "Nope"
