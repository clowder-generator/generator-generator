import Generator, {GeneratorOptions} from "yeoman-generator";
import {printer} from "./utils";
import {Base} from "./questions/Base";
import {IYeomanGenerator} from "@clowder-generator/utils";

interface GeneratorContext {
    name: string;
}

export default class MyGeneratorToRename extends Generator<GeneratorOptions> implements IYeomanGenerator {

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