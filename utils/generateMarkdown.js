function generateMarkdown(data, githubInfo) {
  return `# ${data.title}

## description
${data.description}



`;
}

module.exports = generateMarkdown;
