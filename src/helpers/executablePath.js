/**
 * Return the correct path to the flif-wasm bin module.
 *
 * @return {string} Path to the correct flif binary
 */
function executablePath () {
    var path = require('path');
    var wasmPath = require.resolve('flif-wasm');
    var executionPath = 'node "' + wasmPath + '"';

    if (process.platform === 'win32') {
        executionPath = path.join('.', 'executables', 'win32', 'flif.exe');
    }

    return executionPath;
}

module.exports = executablePath;
