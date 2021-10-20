
# Lap 2 Code Challenge

## Installation & Usage

### Installation

* Clone or download the repo.
* Open terminal and navigate to this folder.

### Usage

* Run `bash _scripts/startDev.sh` to start the dev environment.
  * starts client, server & db services
  * runs db migrations
  * seeds db for development
  * serves client on localhost:8080
  * serves server on localhost:3000
* Run `bash _scripts/startTest.sh` to start the test environment.
  * starts server & db services
  * runs db migrations
  * attaches to server container and triggers full test run
  * no ports mapped to local host
* Run `bash _scripts/teardown.sh` to tear down the current environment.
  * stop all running services
  * removes containers
  * removes volumes
* Run `docker compose down` if you just want to stop the current environment.
***Do not run both dev and test environments at the same time.***

## Changelog


## Bugs


## Wins & Challenges

### Wins

* Managed to implement a loop.
* Learned how to use modulus operator.

### Challenges

* Realised using return would not log all numbers up to the arguement number.