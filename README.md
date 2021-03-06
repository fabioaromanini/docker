# Docker Examples

Docker provides a way to run applications securely isolated in a container, packaged with all its dependencies and libraries.

This repository contains some code examples that I write to learn about docker and its tools. Each directory is a separate project that generates one or more Docker images. In case it generates more than one image, **docker-compose** is used to coordinate the containers execution.

### Handy Commands
* docker version
	* displays *some* information about the currently installed docker version

* docker info
	* displays *plenty* of information about currently installed docker version

* docker container run *args* *image_name*
	* searches locally image_name's latest version. If it's not found, docker will download it, and then start a container from image_name. Can be stopped with *CTRL + C*
	* *args*
	* -p or --publish	*physical_port:docker_port*: maps a given port of your machine to a port of the container
	* -d or --detach: runs process on background. Returns UUID
	* --name: gives a name to a container, in order to avoid using UUID
	* -e or --env: pass environment variables to a container

* docker container ls *args*
	* lists running containers
	* *args*
		* -a: lists stopped containers

* docker container stop [*uuid or container_name*]*
	* stop container identified by uuid or name running in the background

* docker container stop $(docker ps -aq)
	* stops all containers

* docker container logs *uuid or container_name*
	* show logs of a container identified by uuid or name running in the background

* docker container top *uuid or container_name*
	* show list of processes of a container identified by uuid or name running in the background

* docker container rm [*uuid or container_name*]*
	* deletes a container identified by uuid or name running in the background. For safety reasons, it won't delete running containers, unless the argument *-f* is used

* docker container exec *args container_name*
	* executes command on the selected container
	* *args*
		* -it: shell

* docker build *args* path/containing/dockerfile
	* creates image from dockerfile
	* *args*
		* -t image_name[:tag]

* docker container port *container_name*
	* displays relation between host and container ports

* docker container inspect *args* *container_name*
	* displays *plenty* of info for a container
	* *args*
		* --format '{{ *.config.name.* }}'

* docker [*container*] stats
	* displays resources and information for all containers that are currently running
