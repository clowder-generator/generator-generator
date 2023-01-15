import Generator, { GeneratorOptions } from 'yeoman-generator';
import { IYeomanGenerator } from '@clowder-generator/utils';
import * as NPM from './questions/NPM';
import { mergeNPMAnswerIntoContext } from './enricher';

export interface GeneratorContext {
    generatorName: string;
    npm: {
        version: string;
        name: string;
        description: string;
    };
    readme: {
        name: string;
        // eslint-disable-next-line
        description: string;
    };
    circleci: {
        tokenSuffix: string;
    };
}

export default class MyGeneratorToRename extends Generator<GeneratorOptions> implements IYeomanGenerator {
    private context: GeneratorContext | undefined = undefined;

    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(args: string, opts: GeneratorOptions) {
        super(args, opts);
    }

    public initializing(): void {
        this.context = {
            generatorName: '',
            npm: {
                version: '',
                name: '',
                description: ''
            },
            readme: {
                name: '',
                description: ''
            },
            circleci: {
                tokenSuffix: ''
            }
        };
    }

    public async prompting(): Promise<void> {
        const npmAnswer = await this.prompt<NPM.Answer>(NPM.questions);
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        mergeNPMAnswerIntoContext(this.context!, npmAnswer);
    }

    public configuring(): void {
        this.config.save();
    }

    public writing(): void {
        this.fs.copyTpl(
            this.templatePath('**/*'),
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
            {
                globOptions: {
                    dot: true
                }
            }
        );
    }
}
