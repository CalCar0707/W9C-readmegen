// TODO: Create a function that returns a license badge based on which license is passed in
const licenseBadges = [
  '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
  '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
  '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0',
  '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
]
const licenseLinks = [
  'http://www.apache.org/licenses/LICENSE-2.0',
  'http://opensource.org/licenses/MIT',
  'https://www.mozilla.org/en-US/MPL/2.0/',
  'https://unlicense.org/',
]
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(data.license === 'Apache License 2.0'){
    return licenseBadges[0];
  } else if (data.license === 'MIT License') {
    return licenseBadges[1];
  } else if (data.license === 'Mozilla Public License 2.0') {
    return licenseBadges[2];
  } else if (data.license === 'The Unlicense') {
    return licenseBadges[3];
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(data.license === 'Apache License 2.0'){
    return licenseLinks[0];
  } else if (data.license === 'MIT License') {
    return licenseLinks[1];
  } else if (data.license === 'Mozilla Public License 2.0') {
    return licenseLinks[2];
  } else if (data.license === 'The Unilicense') {
    return licenseLinks[3];
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title},
  ## ${data.description},
  ## ${data.table},
  ## ${data.installation},
  ## ${data.usage},
  ## ${data.license},
  ## ${data.contributors},
  ## ${data.testing},
  ## ${data.github}, ${data.email},
  `;
}

module.exports = generateMarkdown;