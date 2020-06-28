#!/user/bin/env node

const shell = require('shelljs');

// -----------------
// 1. stop all containers
shell.exec('docker stop $(docker ps -a -q)');

// 2. remove all containers
shell.exec('docker rm $(docker ps -a -q)');

// 3. remove all images
shell.exec('docker rmi $(docker images -q)');

// 4. remove all volumes
shell.exec('docker volume ls -qf dangling=true | xargs -r docker volume rm');