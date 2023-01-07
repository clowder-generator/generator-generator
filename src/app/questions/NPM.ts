import Generator from "yeoman-generator";
import {isBlank} from "@clowder-generator/utils";

export namespace NPM {

    export interface Answer {
        name: string;
        version: string;
        description: string;
    }

    export const questions: Generator.Question[] = [
        {
            type: "input",
            name: "name" as keyof Answer,
            message: "What will be your package name (it should start with 'generator-') ?",
            validate: async (input: any): Promise<boolean | string> => {
                if (isBlank(input)) {
                    return "The package name cannot be empty"
                }
                return true
            }
        },
        {
            type: "input",
            name: "version" as keyof Answer,
            message: "Version of your generator ?",
            default: "0.1.0",
            validate: async (input: any): Promise<boolean | string> => {
                if (isBlank(input)) {
                    return "The version cannot be empty"
                }
                return true
            }
        },
        {
            type: "input",
            name: "description" as keyof Answer,
            message: "Description of your generator ?",
            default: "My uber awesome generator"
        }
    ]

}