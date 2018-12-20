const packageJson = require('../../package');

class HubService {
    constructor() {
        this.algorithm = packageJson.scripts;
    }

    listProcess() {
        console.log('Here the list of all available process');
        delete this.algorithm.start;
        Object.keys(this.algorithm).forEach(function(key, keyIndex) {
            console.log(`${keyIndex}: ${key}, do => npm run ${key}`);
        });
    }
}

module.exports = HubService;