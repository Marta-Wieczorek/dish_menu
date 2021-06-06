## Objective
The goal was to create a form that will contain several options helping in making menu.
As like:

```

-dish name
-time needed to prepare dish
-type of dish
-several additional properties suitable for specific types of food
```

## Start

These instructions will allow you to copy the project and run it on your computer in order to develop or change applications, as well as for testing.

### Requirements


A few things are needed to run the project
```

-node.js
-npm oraz yarn(mainly yarn used for the project)
-React.js
-create-react-app


```

### Installation

In case you already have the node, npm, yarn and the create-react-app package installed, just clone the repository and fill the packages with the command:

```
yarn
```
Otherwise :

First you need a tool to run node.js, you will install it using node version manager (* [NVM] (https://github.com/creationix/nvm))

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

```


Restart the terminal and check whether the utility has installed correctly:
```
command -v nvm

```
Install the node using:
```
nvm install node

```

The next step is to download the Yarn package management tool, for this you first need to add the repository key to Ubuntu.
* [yarn] (https://yarnpkg.com/lang/en/docs/install/#debian-stable)

```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

```

Now, just refresh the list of our repositories and install Yarn:
```
sudo apt-get update && sudo apt-get install yarn
```

Another thing is to install the React.js library using the create-react-app.
* [create-react-app]



After the entire configuration, to run the application you must use the command

```
yarn start
```

In the case of problems with the version of packages after cloning, you can delete the file [yarn.lock] (yarn.lock)


## Build using:

* [NVM] (https://github.com/creationix/nvm)
* [yarn] (https://yarnpkg.com/lang/en/docs/install/#debian-stable)
* [create-react-app]



## Author
**Marta Wieczorek**


