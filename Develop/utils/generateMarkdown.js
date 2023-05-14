// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let badgeLink = '';
let licenseLink = '';
let licenseSec = '';

function renderLicenseBadge(license) {
    switch (license) {
        case 'Apache License 2.0':
            badgeLink = 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';
            break;
        case 'GNU General Public License v3.0':
            badgeLink = 'https://img.shields.io/badge/License-GPLv3-blue.svg';
            break;
        case 'MIT License':
            badgeLink = 'https://img.shields.io/badge/License-MIT-yellow.svg';
            break;
        case 'BSD 2-Clause "Simplified" License':
            badgeLink = 'https://img.shields.io/badge/License-BSD_2--Clause-orange.svg';
            break;
        case 'BSD 3-Clause "New" or "Revised" License':
            badgeLink = 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg';
            break;
        case 'Boost Software License 1.0':
            badgeLink = 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg';
            break;
        case 'Creative Commons Zero v1.0 Universal':
            badgeLink = 'https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg';
            break;
        case 'Eclipse Public License 2.0':
            badgeLink = 'https://img.shields.io/badge/License-EPL_2.0-red.svg';
            break;
        case 'GNU Affero General Public License v3.0':
            badgeLink = 'https://img.shields.io/badge/License-AGPL_v3-blue.svg';
            break;
        case 'GNU General Public License v2.0':
            badgeLink = 'https://img.shields.io/badge/License-GPL_v2-blue.svg';
            break;
        case 'GNU Lesser General Public License v2.1':
            badgeLink = 'https://img.shields.io/badge/License-LGPL_v2.1-blue.svg';
            break;
        case 'Mozilla Public License 2.0':
            badgeLink = 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg';
            break;
        case 'The Unlicense':
            badgeLink = 'https://img.shields.io/badge/license-Unlicense-blue.svg';
            break;
        default:
            badgeLink = '';
    }
    return badgeLink;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch (license) {
        case 'Apache License 2.0':
            licenseLink = 'https://www.apache.org/licenses/LICENSE-2.0';
            break;
        case 'GNU General Public License v3.0':
            licenseLink = 'https://www.gnu.org/licenses/gpl-3.0.en.html';
            break;
        case 'MIT License':
            licenseLink = 'https://opensource.org/license/mit/';
            break;
        case 'BSD 2-Clause "Simplified" License':
            licenseLink = 'https://opensource.org/license/bsd-2-clause/';
            break;
        case 'BSD 3-Clause "New" or "Revised" License':
            licenseLink = 'https://opensource.org/license/bsd-3-clause/';
            break;
        case 'Boost Software License 1.0':
            licenseLink = 'https://www.boost.org/LICENSE_1_0.txt';
            break;
        case 'Creative Commons Zero v1.0 Universal':
            licenseLink = 'https://creativecommons.org/publicdomain/zero/1.0/';
            break;
        case 'Eclipse Public License 2.0':
            licenseLink = 'https://www.eclipse.org/legal/epl-2.0/';
            break;
        case 'GNU Affero General Public License v3.0':
            licenseLink = 'https://www.gnu.org/licenses/agpl-3.0.en.html';
            break;
        case 'GNU General Public License v2.0':
            licenseLink = 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html';
            break;
        case 'GNU Lesser General Public License v2.1':
            licenseLink = 'https://www.gnu.org/licenses/old-licenses/lgpl-2.1';
            break;
        case 'Mozilla Public License 2.0':
            licenseLink = 'https://opensource.org/licenses/MPL-2.0';
            break;
        case 'The Unlicense':
            licenseLink = 'http://unlicense.org/';
            break;
        default:
            licenseLink = '';
    }
    return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license != 'None') {
        licenseSec += 'Further information regarding this specific license can be found via: ' + renderLicenseLink(license) + '. \n';
    }
    return licenseSec;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    const mdSections = ['Description', 'Installation', 'Usage', 'License', 'Contributing', 'Testing', 'Questions', 'Screenshots']

    // Title
    let readme = '# ' + data.title + '\n';

    // Table of Contents
    readme += '## Table of Contents \n';
    for (let i = 0; i < mdSections.length; i++) {
        readme += "* [" + mdSections[i] + "](#" + mdSections[i] + ") \n";
        readme += '\n';
    }

    // Description
    readme += '### ' + mdSections[0] + '\n';
    readme += data.description + '\n';
    readme += '\n';

    // Installation
    readme += '### ' + mdSections[1] + '\n';
    readme += data.installInstructions + '\n';
    readme += '\n';

    // Usage
    readme += '### ' + mdSections[2] + '\n';
    readme += data.usage + '\n';
    readme += '\n';

    // License
    readme += '### ' + mdSections[3] + '\n';
    readme += renderLicenseSection(data.license) + '\n';
    readme += '![License Badge](' + renderLicenseBadge(data.license) + ')' + '\n';
    readme += '\n';

    // Contributing
    readme += '### ' + mdSections[4] + '\n';
    readme += data.contribution + '\n';
    readme += '\n';

    // Testing
    readme += '### ' + mdSections[5] + '\n';
    readme += data.test + '\n';
    readme += '\n';

    // Questions
    readme += '### ' + mdSections[6] + '\n';
    readme += 'Should you have any further questions, please reach the developer at: ' + data.userEmail + '. </br> ';
    readme += 'GitHub: ' + '<a href="https://github.com/' + data.githubUn + '">' + data.githubUn + '</a>. </br> ';
    readme += '\n';

    // Screenshots
    readme += '### ' + mdSections[7] + '\n';
    readme += '\n';

    // Return built readme
    return readme;
}

module.exports = generateMarkdown;
