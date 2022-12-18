import Generator, {GeneratorOptions} from "yeoman-generator";
import {printer} from "./utils";

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

export default class MyGeneratorToRename extends Generator<GeneratorOptions> implements YeomanGenerator {

    constructor(args: string, opts: GeneratorOptions) {
        super(args, opts);
    }

    public initializing() {
        printer();
    }

}