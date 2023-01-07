import Generator from "yeoman-generator";
import {isBlank} from "@clowder-generator/utils";

export namespace Base {

    export interface Answer {
        folderName: string;
    }

    export const question: Generator.Question = {
        type: "input",
        name: "folderName" as keyof Answer,
        message: "What will be your folder name (it should start with 'generator-') ?",
        // TODO: CLOWDER-18 - should externalize this validation in a dedicated lib (clowder-utils ?)
        //       that would take a validation strategy and a message in input
        validate: async (input: any): Promise<boolean | string> => {
            if (isBlank(input)) {
                return "The folder name cannot be empty"
            }
            return true
        }
    }

}