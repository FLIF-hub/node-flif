function test () {
    var testName = 'warnUser';
    var subject = require('./' + testName + '.js');

    var testData = [
        // The function is used to console log out errors to the user, nothing is returned.
        { 'message': 'N/A', 'expectation': undefined }
    ];

    for (var i = 0; i < testData.length; i++) {
        var message = testData[i].message;
        var expectation = testData[i].expectation;
        var actual = subject(message);
        if (actual !== expectation) {
            var errMsg = '\n' +
                'TEST: ' + testName + '\n' +
                'ERROR:\n' +
                '  Iterator: ' + i + '\n' +
                '  Expected: ' + expectation + '\n' +
                '  Actual: ' + actual;
            throw errMsg;
        }
    }

    return [testName, testData.length];
}

module.exports = test;
