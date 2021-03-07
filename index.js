const updater = require('gh-updater');
const version = require('./package.json').version;
// to check version
updater.check_version('raikasdev/auto-update-test-main', version_data => {
    console.log(JSON.stringify(version_data))
    if (version_data.has_new_version) {
        // to update
        updater.update('raikasdev/auto-update-test-main', '.');
    }
});
 
