const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const YeomanTest = require('yeoman-test/dist/helpers')
const path = require('path')

function isItFriday(today) {
    return "Nope"
}

When('I ask whether it\'s Friday yet', function () {
    this.actualAnswer = isItFriday(this.today);
});

Then('I should be told {string}', function (expectedAnswer) {
    assert.strictEqual(this.actualAnswer, expectedAnswer);
});

Given("a generator", function () {
    // this.runner = helpers.create();
});

When('I call it with the following prompt answer', function (dataTable) {
    // Write code here that turns the phrase above into concrete actions
    for (const dataTableKey in dataTable["rawTable"]) {
        console.log("dataTableKey: ", dataTableKey[0], dataTableKey[1])
    }
    console.log(dataTable)
    console.log(dataTable["rawTable"])
    console.log(dataTable["rawTable"][0])
    console.log(dataTable["rawTable"][0][0])
    console.log(dataTable["rawTable"][0][1])
    console.log(dataTable["rawTable"][1])
    console.log(dataTable["rawTable"][1][0])
    console.log(dataTable["rawTable"][1][1])

    // return 'pending';
});

Then('I should have a file {string} with the content', function (string, docString) {
    // Write code here that turns the phrase above into concrete actions
    // return 'pending';
    console.log("file name", string)
    console.log("docString", docString)
});
