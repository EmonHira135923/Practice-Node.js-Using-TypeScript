1. Node.js Intall
2. npm init -y
3. npm i express dotenv
4. npm install typescript --save-dev
5. npm i ts-node-dev
6. npm i @types/express
7. npm i @types/node
8. npm i nodemon
9. npx tsc --init
10. npm i ts-node-dev --save-dev
11. MVC PATTERN FOLLOW
12. ```
    How this file working and difference
 1 ---> config ---> server.config.ts
 2 ---> controllers
 3 ---> middlewares
 4 ----> app --> app.ts
 5 ----> models
 6 ----> routes
 9 ----> server.ts
```
13 . package.json file something change
```
{
  "name": "node.js-using-typescript",
  "version": "1.0.0",
  "description": "",
  "main": "./dist/server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "tsc",
    "start": "node ./dist/server.js",
    "dev": "tsx watch src/server.ts"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/EmonHira135923/Practice-Node.js-Using-TypeScript.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "module",
} just change code add here.
```
13. app.ts updated
14. .env also updated write PORT = 3000