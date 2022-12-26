import {Given, Then, When} from "@cucumber/cucumber";
import {CustomWorld} from "./custom-world.spec";
import assert from "assert";
import helpers from "yeoman-test";
import MyGeneratorToRename from "../../index";

Given('a generator', function (this: CustomWorld) {
    // Write code here that turns the phrase above into concrete actions
    console.log("empty")
    this.runContext = helpers.create(MyGeneratorToRename, undefined, undefined)

});


When('I call it with the following prompt answer', function (this: CustomWorld, dataTable) {
    // Write code here that turns the phrase above into concrete actions
    console.log("datatable", dataTable)
});


Then('I should have a file {string} with the content', function (this: CustomWorld, string, docString) {
    // Write code here that turns the phrase above into concrete actions
    console.log("string", string)
    console.log("docstring", docString)
    assert(this.runContext !== undefined)
});