/**
 * Detect the user's OS and architecture to generate the correct
 * path to the flif executable that will work for them.
 *
 * @return {string} Path to the correct flif.exe
 */
function executablePath () {
    var path = require('path');
    var os = process.platform;
    var reportedArch = process.arch;
    var executablePath = '';

    var arch = '64';
    if (reportedArch === 'x86' || reportedArch === 'ia32') {
        arch = '32';
    }

    if (os === 'win32') {
        executablePath = path.join('.', 'executables', 'win' + arch, 'flif.exe');
    } else if (os === 'darwin') {
        executablePath = path.join('.', 'executables', 'osx' + arch, 'flif');
    } else if (os === 'linux') {
        executablePath = path.join('.', 'executables', 'ubuntu' + arch, 'flif');
    }

    if (executablePath.length < 2 || os === 'darwin' && arch === '32') {
        throw 'Your operating system or architecture is not supported by node-flif.';
    }

    return executablePath;
}

module.exports = executablePath;
