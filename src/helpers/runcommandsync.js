/**
 * Spawns a child process using the arguments that were passed in.
 * This is done synchronously.
 *
 * @param  {string} args List of arguments to pass in.
 * @return {string}      The data that is returned from the finished executable.
 */
function runCommandSync (args) {
    if (!args || typeof(args) !== 'string') {
        throw 'You must pass in a string containing the arguments to be sent to the command line.';
    }

    var executablePath = require('./executablePath.js');
    var exec = require('child_process').execSync;
    var flif = executablePath();
    var executableAndArgs = flif + ' ' + args;

    var child = exec(executableAndArgs);

    return child.toString().trim();
}

module.exports = runCommandSync;
