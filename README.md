
# Lap 2 Code Challenge

## Installation & Usage

### Installation

* Clone or download the repo.
* Open terminal and navigate to this folder.

### Usage

* Run `bash _scripts/startDev.sh` to start the dev environment.
  * starts client, api & db services
  * runs db migrations
  * seeds db for development
  * serves client on localhost:8080
  * serves api on localhost:3000
* Run `bash _scripts/teardown.sh` to tear down the current environment.
  * stop all running services
  * removes containers
  * removes volumes
* Run `docker compose down` if you just want to stop the current environment.

## Changelog


## Bugs


## Wins & Challenges

### Wins

* Managed to implement a loop.
* Learned how to use modulus operator.

### Challenges

* Realised using return would not log all numbers up to the arguement number.