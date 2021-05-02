function generateMarkdown(data, githubInfo) {
  return `# ${data.title}

##description
${data.description}

##table of contents
- [description](#description)
- [installation](#installation)
- [usage](#usage)
- [licence](#licence)
- [contributing](#contributing)
- [tests](#tests)
- [questions](#questions)

##installation
${data.installation}

##usage
${data.usage}

##licence
${data.licence}

##contributing
${data.contributing}

##tests
${data.tests}

##questions
[Github Profile](${githubInfo.profile})

[Email] (${githubInfo.email})

`;
}

module.exports = generateMarkdown;
