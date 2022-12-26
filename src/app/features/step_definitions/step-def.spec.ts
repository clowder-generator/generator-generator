import {DataTable, Given, Then, When} from "@cucumber/cucumber";
import {CustomWorld} from "./custom-world.spec";
import assert from "assert";
import helpers from "yeoman-test";
import * as path from "path";

Given('a generator', function (this: CustomWorld) {
    // Write code here that turns the phrase above into concrete actions
    console.log("empty")
    this.runContext = helpers.create(
        // MyGeneratorToRename
        path.join(__dirname, "../../../../generators/app")
    )

});


When('I call it with the following prompt answer', async function (this: CustomWorld, dataTable: DataTable) {
    let promptSetup = {
        name: "default"
    };

    type PromptKey = keyof typeof promptSetup;
    // Write code here that turns the phrase above into concrete actions
     for (const [prompt, answer] of dataTable.rows()) {
        promptSetup[prompt as PromptKey] = answer;
     }
     this.runContext?.withPrompts(promptSetup);
    // this.runResult = await this.runContext?.run()

    this.runResult = await this.runContext?.run();
});


Then('I should have a file {string} with the content', function (this: CustomWorld, string, docString) {
    // Write code here that turns the phrase above into concrete actions
    console.log("string", string)
    console.log("docstring", docString)
    assert(this.runContext !== undefined)
    assert(this.runResult !== undefined)
    this.runResult.assertFile("generated.md")
    const content = this.runResult.fs.read("generated.md") // to retrieve content
    console.log("content", content)

    this.runResult.assertFileContent("generated.md", docString)
});