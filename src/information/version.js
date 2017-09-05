/**
 * Returns the versions of node-flif and the flif executable.
 * @return {object} Contains keys for nodeFLIF and flif that contain a string of the versions.
 */
function version () {
    var versionInfo = {
        'nodeFLIF': process.env.npm_package_version,
        'flif': process.env.npm_package_flifVersion
    };

    return versionInfo;
}

module.exports = version;
