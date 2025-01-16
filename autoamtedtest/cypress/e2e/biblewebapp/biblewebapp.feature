Feature: Google search

    Scenario: Search Google with cucumber testing keyword
        Given I visit bible app online
        Then click on the text bible
        When I search for "mark" keyword
        Then the "https://bible.com" page is opened