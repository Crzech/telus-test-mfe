# Telus Test MFE Todo App

This app is a simple todo list app that it's ready to be used as a micro front-end in any javascript application, the repository has two directories, the "Host" app and the "MFE" app, the former only renders the "MFE" app using Webpack v5 Module Federation Plugin, and the latter is the main logic of the Todo list app.

## Features:
- Dockerized
- [Screaming Architecture](https://blog.cleancoder.com/uncle-bob/2011/09/30/Screaming-Architecture.html)
- Next.js 14
- Typescript
- Webpack v5 Module Federation
- Data persistence in localStorage

## How to run it
1. Install [docker desktop](https://www.docker.com/products/docker-desktop/)
2. Verify docker-compose has been installed
3. Run `docker-compose up -d"
4. Open http://localhost to open the Host app and  http://localhost:3000 to open the MFE app
