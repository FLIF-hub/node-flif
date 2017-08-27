/* eslint-disable no-multi-spaces */

function test () {
    var testName = 'executablePath';
    var subject = require('./' + testName + '.js');
    var os = process.platform;
    var arch = process.arch;

    var testData = [
        { 'os': 'win32',  'arch': 'x64',  'path': 'executables\\win64\\flif.exe' },
        { 'os': 'win32',  'arch': 'x86',  'path': 'executables\\win32\\flif.exe' },
        { 'os': 'win32',  'arch': 'ia32', 'path': 'executables\\win32\\flif.exe' },
        { 'os': 'darwin', 'arch': 'x64',  'path': 'executables/osx64/flif'       },
        { 'os': 'darwin', 'arch': 'x86',  'path': 'executables/osx32/flif'       },
        { 'os': 'darwin', 'arch': 'ia32', 'path': 'executables/osx32/flif'       },
        { 'os': 'linux',  'arch': 'x64',  'path': 'executables/ubuntu64/flif'    },
        { 'os': 'linux',  'arch': 'x86',  'path': 'executables/ubuntu32/flif'    },
        { 'os': 'linux',  'arch': 'ia32', 'path': 'executables/ubuntu32/flif'    }
    ];

    for (var i = 0; i < testData.length; i++) {
        var currentOS = testData[i].os;
        var currentArch = testData[i].arch;
        var expectedPath = testData[i].path;
        var actualPath = subject();
        if (os === currentOS && arch === currentArch && actualPath !== expectedPath) {
            var errMsg = '\n' +
                'TEST: ' + testName + '\n' +
                'ERROR:\n' +
                '  Iterator: ' + i + '\n' +
                '  OS: ' + currentOS + '\n' +
                '  Arch: ' + currentArch + '\n' +
                '  Expected: ' + expectedPath + '\n' +
                '  Actual: ' + actualPath;
            throw errMsg;
        }
    }

    return [testName, testData.length];
}

module.exports = test;
