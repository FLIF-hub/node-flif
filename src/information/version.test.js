/* eslint-disable no-multi-spaces */

function testVersion () {
    var version = require('./version.js');
    var testData = [
        { 'item': 'nodeFLIF', 'expectation': '0.1.0' },
        { 'item': 'flif',     'expectation': '0.3.0' }
    ];

    for (var i = 0; i < testData.length; i++) {
        var currentItem = testData[i].item;
        var expectation = testData[i].expectation;
        var actual = version()[currentItem];
        if (actual !== expectation) {
            var errMsg = '\n' +
                'TEST: version\n' +
                'ERROR:\n' +
                '  Iterator: ' + i + '\n' +
                '  Item: ' + currentItem + '\n' +
                '  Expected: ' + expectation + '\n' +
                '  Actual: ' + actual;
            throw errMsg;
        }
    }

    return ['version', testData.length];
}

module.exports = testVersion;
