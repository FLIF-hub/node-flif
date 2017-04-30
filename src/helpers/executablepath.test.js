/* eslint-disable no-multi-spaces */

function testExecutablePath () {
    var executablePath = require('./executablepath.js');
    var os = process.platform;
    var arch = process.arch;

    var testData = [
        { 'os': 'win32',  'arch': 'x64', 'path': 'executables\\win64\\flif.exe' },
        { 'os': 'win32',  'arch': 'x86', 'path': 'executables\\win32\\flif.exe' },
        { 'os': 'darwin', 'arch': 'x64', 'path': 'executables/osx64/flif'       },
        { 'os': 'darwin', 'arch': 'x86', 'path': 'executables/osx32/flif'       },
        { 'os': 'linux',  'arch': 'x64', 'path': 'executables/ubuntu64/flif'    },
        { 'os': 'linux',  'arch': 'x86', 'path': 'executables/ubuntu32/flif'    }
    ];

    for (var i = 0; i < testData.length; i++) {
        var currentOS = testData[i].os;
        var currentArch = testData[i].arch;
        var expectedPath = testData[i].path;
        var actualPath = executablePath();
        if (os === currentOS && arch === currentArch && actualPath !== expectedPath) {
            var errMsg = '\n' +
                'TEST: executablePath\n' +
                'ERROR:\n' +
                '  Iterator: ' + i + '\n' +
                '  OS: ' + currentOS + '\n' +
                '  Arch: ' + currentArch + '\n' +
                '  Expected: ' + expectedPath + '\n' +
                '  Actual: ' + actualPath;
            throw errMsg;
        }
    }

    return ['executablePath', testData.length];
}

module.exports = testExecutablePath;
