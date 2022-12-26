import Generator, {GeneratorOptions} from "yeoman-generator";
import {printer} from "./utils";
import {Base} from "./questions/Base";

// TODO - CLOWDER-10 - should mode this Helper to another external lib since it will be used by all the generators
interface YeomanGenerator {
    initializing?(): void,
    prompting?(): void,
    configuring?(): void,
    writing?(): void,
    conflicts?(): void,
    install?(): void,
    end?(): void
}

interface GeneratorContext {
    name: string;
}

export default class MyGeneratorToRename extends Generator<GeneratorOptions> implements YeomanGenerator {

    private context: GeneratorContext = {
        name: ""
    }

    constructor(args: string, opts: GeneratorOptions) {
        super(args, opts);
    }

    public initializing() {
        printer();
    }

    public async prompting() {
        const baseAnswer = await this.prompt<Base.Answer>(Base.question);
        this.context.name = baseAnswer.name;
    }

    public writing() {
        this.fs.copyTpl(
            this.templatePath("*"),
            this.destinationPath(),
            {
                name: this.context.name
            },
            undefined,
            {globOptions: {dot: true}}
        );
    }

}