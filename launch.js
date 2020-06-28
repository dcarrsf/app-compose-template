#!/user/bin/env node

const shell = require('shelljs');

// -----------------
// 1. stop all containers
shell.exec('docker stop $(docker ps -a -q)');

// 2. remove all containers
shell.exec('docker rm $(docker ps -a -q)');

// 3. build new containersand start
shell.exec('docker-compose up --build');
