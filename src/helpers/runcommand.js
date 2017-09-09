/**
 * Spawns a child process using the arguments that were passed in.
 * This is done asynchronously. It will run the callback function
 * upon completion.
 * @param  {string}   args     List of arguments to pass in
 * @param  {function} callback Optional callback function
 */
function runCommand (args, callback) {
    if (!args || typeof(args) !== 'string') {
        throw 'You must pass in a string containing the arguments to be sent to the command line.';
    } else if (callback && typeof(callback) !== 'function') {
        throw 'The second argument to the runCommand method is meant to be a callback function.';
    }

    var executablePath = require('./executablePath.js');
    var exec = require('child_process').exec;
    var flif = executablePath();
    var executableAndArgs = flif + ' ' + args;

    exec(executableAndArgs, function (error, stdout) {
        if (error !== null) {
            throw 'Executable Error: ' + error;
        }
        if (stdout && callback) {
            callback(stdout);
        } else if (callback) {
            callback();
        }
    });
}

module.exports = runCommand;
