/**
 * Return the correct path to the flif-wasm bin module.
 *
 * @return {string} Path to the correct flif binary
 */
function executablePath () {
    var executionPath = '';

    if (process.platform === 'win32') {
        var path = require('path');
        var rootPath = '';
        try {
            rootPath = require.resolve('node-flif');
        } catch (err) {
            // eslint-disable-line no-empty
        }

        executionPath = path.join('.', 'executables', 'win32', 'flif.exe');
        if (rootPath) {
            executionPath = path.join(path.dirname(rootPath), executionPath);
        }
    } else {
        var wasmPath = require.resolve('flif-wasm');
        executionPath = 'node "' + wasmPath + '"';
    }

    return executionPath;
}

module.exports = executablePath;
