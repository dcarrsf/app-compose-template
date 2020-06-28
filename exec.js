#!/user/bin/env node

const { program } = require('commander');
const shell = require('shelljs');

// -----------------
// create cli
program.version('0.0.1');
program.requiredOption('-c, --container <type>', 'docker compose container name');
program.parse(process.argv);

// start interactive terminal
shell.exec(`docker-compose exec ${program.container} sh`);
