import {Base} from "./questions/Base";
import {GeneratorContext} from "./index";
import {NPM} from "./questions/NPM";
import {fromKebabCase} from "@clowder-generator/utils";

export const mergeNPMAnswerIntoContext = (generatorContext: GeneratorContext, npmAnswer: NPM.Answer) => {
    generatorContext.generatorName = fromKebabCase(npmAnswer.name).toPascalCase();

    generatorContext.npm.name = npmAnswer.name;
    generatorContext.npm.version = npmAnswer.version;
    generatorContext.npm.description = npmAnswer.description || "";

    generatorContext.readme.name = fromKebabCase(npmAnswer.name).toScreamingKebabCase();
    generatorContext.readme.description = npmAnswer.description || "";

    generatorContext.circleci.tokenSuffix = fromKebabCase(npmAnswer.name).toScreamingSnakeCase();
};