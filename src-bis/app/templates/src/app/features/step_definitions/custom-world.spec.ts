import {RunContext, RunResult} from "yeoman-test";
import {setWorldConstructor} from "@cucumber/cucumber";

export class CustomWorld {
    public runResult?: RunResult;
    public runContext?: RunContext;

    constructor() {
        this.runResult = undefined;
        this.runContext = undefined;
    }
}

setWorldConstructor(CustomWorld);