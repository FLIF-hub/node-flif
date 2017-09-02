/* eslint-disable no-regex-spaces*/

/**
 * Generate a detailed error message to display if a test fails.
 *
 * @param  {object}  details             All details required to generate a helpful error message
 * @param  {array}   details.stack       Stack trace
 * @param  {string}  details.testName    Name of the failed test
 * @param  {number}  details.i           Iteration of test loop
 * @param  {array}   details.arguments   Array of what will be passed into the test subject
 * @param  {unknown} details.expectation Expectated outcome
 * @param  {unknown} details.actual      Actual outcome
 *
 * @return {string}         The error message for the failed test.
 */
function errorMessage (details) {
    // Get the name of the project from package.json
    var project = process.env.npm_package_name;
    var projectName = project + '/';
    // Escape any dashes that could be in the package name
    project = project.replace(/-/g, '\\-');
    if (process.platform === 'win32') {
        projectName = new RegExp('(?:\\()(?:.*)(?:' + project + ')(?:\\/)?(?:\\\\)?', 'gm');
    }

    var stackTrace = [];
    for (var i = 2; i < (details.stack.length - 1); i++) {
        var item = details.stack[i].trim().replace('at ', '    ').replace(projectName, '(.\\');
        stackTrace.push(item);
    }
    stackTrace = stackTrace.join('\n');

    var errMsg = '\n' +
        'TEST: ' + details.testName + '\n' +
        'ERROR:\n' +
        '  Iterator: ' + details.i + '\n' +
        '  Expected: ' + details.expectation + '\n' +
        '  Actual: ' + details.actual + '\n' +
        '  Arguments: ' + JSON.stringify(details.arguments, null, 2).replace(/\n  /g, '\n    ').replace(']', '  ]') + '\n' +
        '  Stack Trace:\n' +
        stackTrace.split('\n\n').join('\n');

    return errMsg;
}

module.exports = errorMessage;
