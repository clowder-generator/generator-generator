import Generator, {GeneratorOptions} from "yeoman-generator";
import {IYeomanGenerator} from "@clowder-generator/utils";
import {NPM} from "./questions/NPM";
import {mergeNPMAnswerIntoContext} from "./enricher";

export interface GeneratorContext {
    generatorName: string;
    npm: {
        version: string;
        name: string;
        description: string;
    }
    readme: {
        name: string;
        description: string;
    }
    circleci: {
        tokenSuffix: string;
    }
}

export default class MyGeneratorToRename extends Generator<GeneratorOptions> implements IYeomanGenerator {

    private context: GeneratorContext | undefined = undefined;

    constructor(args: string, opts: GeneratorOptions) {
        super(args, opts);
    }

    public initializing() {
        this.context = {
            generatorName: "",
            npm: {
                version: "",
                name: "",
                description: ""
            },
            readme: {
                name: "",
                description: ""
            },
            circleci: {
                tokenSuffix: ""
            }
        }
    }

    public async prompting() {
        const npmAnswer = await this.prompt<NPM.Answer>(NPM.questions);
        mergeNPMAnswerIntoContext(this.context!, npmAnswer);
    }

    public configuring() {
        this.config.save();
    }

    public writing() {
        this.fs.copyTpl(
            this.templatePath("**/*"),
            this.destinationPath(),
            {
                index_ts_name: this.context?.generatorName,
                circleci_name: this.context?.circleci.tokenSuffix,
                readme_name: this.context?.readme.name,
                readme_description: this.context?.readme.description,
                npm_name: this.context?.npm.name,
                npm_version: this.context?.npm.version,
                npm_description: this.context?.npm.description
            },
            undefined,
            {globOptions: {dot: true}}
        );
    }

}