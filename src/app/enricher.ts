import { GeneratorContext } from './index';
import * as NPM from './questions/NPM';
import { CaseHelper } from '@clowder-generator/utils';

export const mergeNPMAnswerIntoContext = (generatorContext: GeneratorContext, npmAnswer: NPM.Answer): void => {
    const trimmedNamed = npmAnswer.name.trim();
    generatorContext.generatorName = CaseHelper.fromKebabCase(trimmedNamed).toPascalCase();

    generatorContext.npm.name = trimmedNamed;
    generatorContext.npm.version = npmAnswer.version.trim();
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    generatorContext.npm.description = npmAnswer.description || '';

    generatorContext.readme.name = CaseHelper.fromKebabCase(trimmedNamed).toScreamingKebabCase();
    generatorContext.readme.description = npmAnswer.description || '';

    generatorContext.circleci.contextName = trimmedNamed;
};
