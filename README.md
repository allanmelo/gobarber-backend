<h1 align="center">GoBarber :: The Backend 💻</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank" rel=”noopener”>
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> GoBarber is an app to manage and schedule haircuts & beard shaving. It is based on Node, ReactJS and React Native.
> This repository holds the files necessary to manage the Node backend of this application.

## Technologies

- <a href="https://nodejs.org/" target="_blank" rel=”noopener”>Node</a> v12.18.0
- <a href="https://www.typescriptlang.org/" target="_blank" rel=”noopener”>TypeScript</a> v3.9.6
- <a href="https://www.postgresql.org/" target="_blank" rel=”noopener”>PostgreSQL</a>
- <a href="https://www.docker.com/" target="_blank" rel=”noopener”>Docker</a>
- <a href="https://typeorm.io/" target="_blank" rel=”noopener”>TypeORM</a> v0.2.25
- <a href="https://expressjs.com/" target="_blank" rel=”noopener”>Express</a> v4.17.1
- <a href="https://github.com/whitecolor/ts-node-dev" target="_blank" rel=”noopener”>TS Node Dev</a> v1.0.0-pre.50

## Install

> Install all dependencies using:

```sh
yarn install
```

## Connection with your own database

> We recommend you to install Docker and use a postgres image provided on Docker Official Images. Instructions of how to copy an image and create an instance in your computer can be found on <a href="https://hub.docker.com/_/postgres" target="_blank" rel=”noopener”>Docker's website</a>.

> To configure the connection of the source files with your own database, you need to edit ormconfig.json with your own host, port, username, password and database.

> To start a migration, use the following command to found typeorm instructions:

```sh
yarn typeorm
```

## Usage

> To start your server in development mode, use:

```sh
yarn dev:server
```

## Author

👤 **Allan Melo**

* Github: [@allmelo](https://github.com/allmelo)
* LinkedIn: [@allanmelo](https://linkedin.com/in/allanmelo)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
