# Docker

Docker provides a way to run applications securely isolated in a container, packaged with all its dependencies and libraries.

## Section 2

#### concepts:
**image** - the set of different software pieces that make up an application

**container** - a running instance of an application

**hub.docker.com** - a repository for images (like github is a repo for code)

#### most used commands:
* docker version
	* displays *some* information about the currently installed docker version 

* docker info
	* displays *plenty* of information about currently installed docker version

* docker container run *args* *image_name*
	* searches locally image_name's latest version. If it's not found, docker will download it, and then start a container from image_name. Can be stopped with *CTRL + C*
	* *args*
	* --publish	*physical_port:docker_port*: maps a given port of your machine to a port of the container
	* --detach: runs process on background. Returns UUID
	* --name: gives a name to a container, in order to avoid using UUID
	* --env: pass environment variables to a container

* docker container ls *args*
	* lists running containers
	* *args*
		* -a: lists stopped containers

* docker container stop [*uuid or container_name*]*
	* stop container identified by uuid or name running in the background

* docker container logs *uuid or container_name*
	* show logs of a container identified by uuid or name running in the background

* docker container top *uuid or container_name*
	* show list of processes of a container identified by uuid or name running in the background

* docker container rm [*uuid or container_name*]*
	* deletes a container identified by uuid or name running in the background. For safety reasons, it won't delete running containers, unless the argument *-f* is used

