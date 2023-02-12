Feature: Basic generation
    A basic generator generation

    Scenario: All CICD files have been generated
        Given a generator
        When I call it with valid prompt
        Then I should have the following CICD files
            | .circleci/config.yml |

    Scenario: All config files have been generated
        Given a generator
        When I call it with valid prompt
        Then I should have the following config files
            | fileName          |
            | .yo-rc.json       |
            | .gitignore        |
            | .nvmrc            |
            | jest.config.json  |
            | package.json      |
            | README.md         |
            | LICENSE.md        |
            | tsconfig.json     |
            | .editorconfig     |
            | .eslintignore     |
            | .eslintrc.js      |
            | .husky/pre-commit |

    Scenario: All src files have been generated
        Given a generator
        When I call it with valid prompt
        Then I should have the following sources files
            | fileName                  |
            | src/app/index.ts          |
            | src/app/utils.test.ts     |
            | src/app/utils.ts          |
            | src/app/questions/Base.ts |

    Scenario: All feature file have been generated
        Given a generator
        When I call it with valid prompt
        Then I should have the following feature files
            | fileName                                               |
            | cucumber.js                                            |
            | src/app/features/base.feature                          |
            | src/app/features/step_definitions/custom-world.spec.ts |
            | src/app/features/step_definitions/step-def.spec.ts     |

    Scenario: All template file have been generated
        Given a generator
        When I call it with valid prompt
        Then I should have the following template files
            | fileName                       |
            | src/app/templates/generated.md |
