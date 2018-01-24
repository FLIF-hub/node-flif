/**
 * Return the correct path to the flif-wasm bin module.
 *
 * @return {string} Path to the correct flif binary
 */
function executablePath () {
    var executionPath = '';

    if (process.env.FLIF === 'exe') {
        var path = require('path');
        executionPath = path.join('.', 'executables', 'win32', 'flif.exe');
    } else {
        var wasmPath = require.resolve('flif-wasm');
        executionPath = 'node "' + wasmPath + '"';
    }

    return executionPath;
}

module.exports = executablePath;
