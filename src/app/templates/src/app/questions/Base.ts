import Generator from "yeoman-generator";

export namespace Base {

    export interface Answer {
        name: string;
    }

    export const question: Generator.Question = {
        type: "input",
        name: "name" as keyof Answer,
        message: "What will be the name of the application ?",
        default: "application name"
    }
}