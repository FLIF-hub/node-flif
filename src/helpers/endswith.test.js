/* eslint-disable no-multi-spaces */

function testEndsWith () {
    var testName = 'endswith';
    var subject = require('./' + testName.toLowerCase() + '.js');

    var testData = [
        { 'phrase': 'Batman',    'word': 'man',          'expectation': true },
        { 'phrase': 'Kitten',    'word': 'Kitten',       'expectation': true },
        { 'phrase': 'Pizza Hut', 'word': 'a Hut',        'expectation': true },
        { 'phrase': '3.14159',   'word': '59',           'expectation': true },
        { 'phrase': 'True',      'word': 'True',         'expectation': true },
        { 'phrase': 'Batman',    'word': 'MAN',          'expectation': false },
        { 'phrase': 'Kitten',    'word': 'Space Kitten', 'expectation': false },
        { 'phrase': 'Pizza Hut', 'word': 'Pizza',        'expectation': false },
        { 'phrase': '3.14159',   'word': '141',          'expectation': false },
        { 'phrase': 'True',      'word': 'False',        'expectation': false }
    ];

    for (var i = 0; i < testData.length; i++) {
        var phrase = testData[i].phrase;
        var word = testData[i].word;
        var expectation = testData[i].expectation;

        if (subject(phrase, word) !== expectation) {
            var errMsg = '\n' +
                'TEST: ' + testName + '\n' +
                'ERROR:\n' +
                '  Iterator: ' + i + '\n' +
                '  Phrase: ' + phrase + '\n' +
                '  Word: ' + word + '\n' +
                '  Expected: ' + expectation + '\n' +
                '  Actual: ' + subject(phrase, word);
            throw errMsg;
        }
    }
    return [testName, testData.length];
}

module.exports = testEndsWith;
