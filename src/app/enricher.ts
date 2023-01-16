import { GeneratorContext } from './index';
import * as NPM from './questions/NPM';
import { fromKebabCase } from '@clowder-generator/utils';

export const mergeNPMAnswerIntoContext = (generatorContext: GeneratorContext, npmAnswer: NPM.Answer): void => {
    generatorContext.generatorName = fromKebabCase(npmAnswer.name).toPascalCase();

    generatorContext.npm.name = npmAnswer.name;
    generatorContext.npm.version = npmAnswer.version;
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    generatorContext.npm.description = npmAnswer.description || '';

    generatorContext.readme.name = fromKebabCase(npmAnswer.name).toScreamingKebabCase();
    generatorContext.readme.description = npmAnswer.description || '';

    // TODO: might have to review the fromKebab..toKebab. For now it is only use to
    //       validate that we indeed have a kebabCase, but later on it will be the
    //       responsibility of the validator function in the prompt.
    generatorContext.circleci.contextName = fromKebabCase(npmAnswer.name).toKebabCase();
};
