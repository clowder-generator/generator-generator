import Generator from 'yeoman-generator';
import { Validator } from '@clowder-generator/utils';

export interface Answer {
    name: string;
    version: string;
    description: string;
}

export const questions: Generator.Question[] = [
    {
        type: 'input',
        name: 'name' as keyof Answer,
        message: "What will be your package name (it should start with 'generator-') ?",
        validate: Validator.validateWith([
            Validator.nonBlankValidation('The package name should not be empty'),
            Validator.shouldMatchRegexValidation(/^generator-/, 'The package name should start with "generator-"'),
            Validator.shouldMatchRegexValidation(/-[0-9a-z]+$/, 'The package name should end with an alpha-numeric char. Got "%s"'),
            Validator.kebabCaseValidation('The package name should be in kebab case (dash separated lower case)')
        ], {
            trimmed: true
        })
    },
    {
        type: 'input',
        name: 'version' as keyof Answer,
        message: 'Version of your generator ?',
        default: '0.1.0',
        validate: Validator.validateWith([
            Validator.nonBlankValidation()
        ], {
            globalErrorMessage: 'The version cannot be empty'
        })
    },
    {
        type: 'input',
        name: 'description' as keyof Answer,
        message: 'Description of your generator ?',
        default: 'My uber awesome generator'
    }
];
