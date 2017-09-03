/**
 * Return the correct path to the flif-wasm bin module.
 *
 * @return {string} Path to the correct flif binary
 */
function executablePath () {
    var wasmPath = require.resolve('flif-wasm');
    var executionPath = 'node "' + wasmPath + '"';

    return executionPath;
}

module.exports = executablePath;
