/**
 * Generate a detailed error message to display if a test fails.
 *
 * @param  {object}  details             All details required to generate a helpful error message
 * @param  {array}   details.stack       Stack trace
 * @param  {string}  details.testName    Name of the failed test
 * @param  {number}  details.i           Iteration of test loop
 * @param  {string}  details.src         Source input (encode, decode, transcode)
 * @param  {object}  details.param       Param input (settings)
 * @param  {boolean} details.expectation Expectated outcome
 * @param  {boolean} details.actual      Actual outcome
 *
 * @return {string}         The error message for the failed test.
 */
function errorMessage (details) {
    var nodeFlif = 'node-flif/';
    if (process.platform === 'win32') {
        nodeFlif = /(?:\()(?:.*)(?:node\-flif)(?:\/)?(?:\\)?/gm;
    }

    var stackTrace = [
        details.stack[1].trim().replace('at ', '    ').replace(nodeFlif, '(.\\'),
        details.stack[2].trim().replace('at ', '    ').replace(nodeFlif, '(.\\'),
        details.stack[3].trim().replace('at ', '    ').replace(nodeFlif, '(.\\'),
        details.stack[4].trim().replace('at ', '    ').replace(nodeFlif, '(.\\'),
        details.stack[5].trim().replace('at ', '    ').replace(nodeFlif, '(.\\'),
        details.stack[6].trim().replace('at ', '    ').replace(nodeFlif, '(.\\')
    ].join('\n');

    var errMsg = '\n' +
        'TEST: ' + details.testName + '\n' +
        'ERROR:\n' +
        '  Iterator: ' + details.i + '\n' +
        '  Source: ' + details.src + '\n' +
        '  Params: ' + JSON.stringify(details.param, null, 4).replace('}', '  }') + '\n' +
        '  Expected: ' + details.expectation + '\n' +
        '  Actual: ' + details.actual + '\n' +
        '  Stack Trace:\n' +
        stackTrace.split('\n\n').join('\n');

    return errMsg;
}

module.exports = errorMessage;
