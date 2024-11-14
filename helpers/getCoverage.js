const fs = require('fs');

/**
 * Get INSTRUCTION coverage from jacoco report.
 *
 * @param {string} coveragePath
 * @returns {number}
 */
function getCoverage(coveragePath) {
    if ( ! fs.existsSync(coveragePath) ){
        return 0.0;
    }
    const coverage = JSON.parse(fs.readFileSync(coveragePath, 'utf-8'));
    return coverage.total.lines.pct;
}

module.exports = getCoverage;


