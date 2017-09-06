/**
 * Returns the versions of node-flif and the flif executable.
 * @return {object} Contains keys for nodeFLIF and flif that contain a string of the versions.
 */
function version () {
    var manifest = require('root-require')('package.json');
    var versionInfo = {
        'nodeFLIF': manifest.version,
        'flif': manifest.flifVersion
    };

    return versionInfo;
}

module.exports = version;
