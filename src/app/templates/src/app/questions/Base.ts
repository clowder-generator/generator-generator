import Generator from "yeoman-generator";
import {isBlank} from "@clowder-generator/utils";

export namespace Base {

    export interface Answer {
        name: string;
    }

    export const question: Generator.Question = {
        type: "input",
        name: "name" as keyof Answer,
        message: "What will be the name of the application ?",
        default: "application name",
        validate: async (input: string): Promise<boolean | string> => {
            if (isBlank(input)) {
                return "The name cannot be empty";
            }
            return true;
        }
    }
}