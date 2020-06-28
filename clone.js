#!/user/bin/env node

const _ = require('lodash');
const path = require('path');
const shell = require('shelljs');

const repos = [
  { dir: 'app-service-template', repo: 'git@github.com/dcarrsf/app-service-template.git' },
  { dir: 'app-ui-template', repo: 'git@github.com/dcarrsf/app-ui-template.git' }
];

if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
}

const localRepos = _.filter(shell.ls('.'), item => shell.test('-d', item) && shell.test('-e', path.join(item, '.git')));
const neededRepos = _.filter(repos, repo => localRepos.includes(repo.dir));

_.forEach(neededRepos, repo => {
  const { dir, repo: remote } = repo;
  console.log(chalk.orange(`Cloning ${remote}...`));
  shell.exec(`git clone --quiet ${remote}`);
  console.log(chalk.orange(`Cloning complete for ${remote}...`));
  if (shell.test('-e', path.join(dir, 'package.json'))) {
    console.log(chalk.orange('Yarn install...'));
    shell.pushd('-q', dir);
    shell.exec('yarn');
    shell.popd('-q');
  }
});
