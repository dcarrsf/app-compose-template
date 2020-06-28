### app-compose-template

Docker-compose and local environment helper scripts.

## Clone repositories

Clone the ui template and the service template.

```
$ node ./clone
```

## Install

Run yarn on the workspace.

```
$ yarn
```

## Launch docker

Launch node servers in docker.

```
$ node ./launch
```

## Check processes

Check processes in docker.

```
$ node ./process
```

## Run shell

Run virtual shell in docker on a given service.

```
$ node ./exec -c api
```

## Clean

Clean and stop all containers.

```
$ node ./process
```
