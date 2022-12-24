const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function isItFriday(today) {
    // We'll leave the implementation blank for now
}

Given('today is Sunday', function () {
    this.today = 'Sunday';
});