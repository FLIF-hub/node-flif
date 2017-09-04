/* eslint-disable no-multi-spaces */

function test () {
    var testName = 'version';
    var subject = require('./' + testName + '.js');
    var testData = [
        { 'item': 'nodeFLIF', 'expectation': '0.2.0' },
        { 'item': 'flif',     'expectation': '0.3.0' }
    ];

    for (var i = 0; i < testData.length; i++) {
        var currentItem = testData[i].item;
        var expectation = testData[i].expectation;
        var actual = subject()[currentItem];
        if (actual !== expectation) {
            var errMsg = '\n' +
                'TEST: ' + testName + '\n' +
                'ERROR:\n' +
                '  Iterator: ' + i + '\n' +
                '  Item: ' + currentItem + '\n' +
                '  Expected: ' + expectation + '\n' +
                '  Actual: ' + actual;
            throw errMsg;
        }
    }

    return [testName, testData.length];
}

module.exports = test;
