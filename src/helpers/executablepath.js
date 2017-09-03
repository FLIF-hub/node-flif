/**
 * Return the correct path to the flif-wasm bin module.
 *
 * @return {string} Path to the correct flif binary
 */
function executablePath () {
    var path = require('path');
    // TODO: This probably won't work once node-flif is required as a dep in other projects
    var binary = path.resolve(process.cwd(), './node_modules/.bin/flif-wasm');

    return binary;
}

module.exports = executablePath;
